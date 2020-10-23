import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { MdAdd, MdSearch } from 'react-icons/md'

import { Container, Content, Header, Actions, Search, Body, LoadingArea,
         MessageArea, Tools, Tool } from './styles';

import api_tools from '../../services/api_tools';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading'

const Main = () => {

  // Inner states
  const [tools, setTools] = useState([])
  const [bodyLoading, setBodyLoading] = useState(false)
  const [bodyMessage, setBodyMessage] = useState('')
  const [search, setSearch] = useState('')
  const [inLogs, setInLogs] = useState(false)

  // API Calls
  async function getTools() {
    try {

      const response = await api_tools.get(`/tools`)

      if(response.data) {
        setTools(response.data)
      }

    } catch (error) {
      toast.error('Error')

    }
  }

  // USE EFFECTS
  useEffect(() => {
    getTools()
  }, [])


  return (
    <Container>
      <Content>
        <Header>
          <h1>VUTTR</h1>
          <h2>Very Useful Tools to Remember</h2>
        </Header>
        <Actions>
          <Search>
            <div>
              <MdSearch />
              <input

              />
            </div>
          </Search>
          <Popup
            trigger={
              <button>
                <MdAdd />
                Add
              </button>
            }
            modal
          >

          </Popup>
        </Actions>
        <Body>
          {
            bodyLoading?
            <LoadingArea>
              <Loading />
            </LoadingArea>
            
            :
            bodyMessage?
            <MessageArea>
              {bodyMessage}
            </MessageArea>
            :
            <Tools>
              {
                tools && Array.isArray(tools) && tools.map(tool => {

                  return (
                    <Tool>
                      {tool.title}
                    </Tool>
                  )
                })
              }
            </Tools>
          }
        </Body>
      </Content>
    </Container>
  );
}

export default Main;