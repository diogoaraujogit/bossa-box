import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

import { MdAdd, MdClear, MdSearch } from 'react-icons/md'

import {
  Container, Content, Header, Actions, Search, Body, LoadingArea,
  MessageArea, Tools, Tool, ToolHeader, ToolTags
} from './styles';

import api_tools from '../../services/api_tools';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading'
import CheckboxLabels from '../../components/Checkbox'


const Main = () => {

  // Inner states
  const [tools, setTools] = useState([])
  const [bodyLoading, setBodyLoading] = useState(false)
  const [bodyMessage, setBodyMessage] = useState('')
  const [search, setSearch] = useState('')
  const [inLogs, setInLogs] = useState(false)

  // Functions

  function handleSearch() {

    const query_string = inLogs?
    `?tags_like=${search}`
    :
    `?q=${search}`

    search?
    getTools(query_string)
    :
    getTools('')
  }

  // API Calls
  async function getTools(query_string) {
    try {

      const response = await api_tools.get(`/tools${query_string}`)

      if (response.data) {
        setTools(response.data)
      }

    } catch (error) {
      toast.error('Error')

    }
  }

  // USE EFFECTS
  useEffect(() => {
    handleSearch()
  }, [search, inLogs])


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
                placeholder='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <CheckboxLabels value={inLogs} label='search in logs only' func={setInLogs} />
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
            {
              close => (<div>Teste</div>)
            }
          </Popup>
        </Actions>
        <Body>
          {
            bodyLoading ?
              <LoadingArea>
                <Loading />
              </LoadingArea>

              :
              bodyMessage ?
                <MessageArea>
                  {bodyMessage}
                </MessageArea>
                :
                <Tools>
                  {
                    tools && Array.isArray(tools) && tools.map(tool => {
                      
                      const link = tool.link
                      const title = tool.title
                      const description = tool.description
                      const tags = tool.tags

                      return (
                        <Tool>
                          <ToolHeader>
                            <a href={link}>
                              {title}
                            </a>
                            
                            <div>
                              <MdClear />
                              remove
                            </div>

                          </ToolHeader>
                          <p>
                            {description}
                          </p>
                          <ToolTags>
                            {
                              tags && Array.isArray(tags) && tags.map(tag => {

                                return (
                                  <span>{`#${tag}`}</span>
                                )
                              })
                            }
                          </ToolTags>
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