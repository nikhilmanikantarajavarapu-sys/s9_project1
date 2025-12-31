import React from 'react'

function Master() {
  return (
    <div>
        <table>
            <tr>
                <td colSpan={2}> <h1>Registration form</h1></td>
            </tr>
            <tr>
                <td>username</td>
                <td><input type="text" width={4}/></td>
            </tr>
        </table>
    </div>
  )
}

export default Master
