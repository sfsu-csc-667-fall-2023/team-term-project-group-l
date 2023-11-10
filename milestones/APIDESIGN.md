Team L

<table>
  <tr>
   <td>Action
   </td>
   <td>Inputs/Data
   </td>
   <td>Pre Condition(s)
   </td>
   <td>Post Condition(s)
   </td>
   <td>API Endpoint
   </td>
  </tr>
  <tr>
   <td>User registers for an account
   </td>
   <td>
<ol>
<li> first name
<li> last name
<li>email
<li>password
</li>
</ol>
   </td>
   <td>
   </td>
   <td>
<ol>
<li>user_id is automatically generated

<li> after login user is taken to game landing page
</li>
</ol>
   </td>
   <td>POST /user/register { email, password}
   </td>
  </tr>
  <tr>
   <td>User logs in
   </td>
   <td>
<ol>

<li>email

<li>password
</li>
</ol>
   </td>
   <td>Check for user credentials and validate the login info
   </td>
   <td>
<ol>

<li>If the user does't account ask them to create one
/user/register
<li> If they have user account then redirected to the lobby to see games
</li>
</ol>
   </td>
   <td>POST /user/login {email, password}
   </td>
</table>
