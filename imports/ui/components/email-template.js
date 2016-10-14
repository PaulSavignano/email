import React from 'react'

export const EmailTemplate = (props) => (
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>HTML email test</title>
      <link href="styles.css" media="all" rel="stylesheet" type="text/css" />
    </head>
    <body itemscope itemtype="http://schema.org/EmailMessage">
      <table width="100%">
        <tbody>
          <tr>
            <td></td>
            <td width="600">
              <table width="100%">
                <tbody>
                  <tr>
                    <td>{ props.email.message }</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
)
