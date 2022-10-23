import React from 'react'

const MyFooter = () => {
  return (
    <>
      <footer>
        <div class="footer">
          <p>
            Copyright &copy;{' '}
            <script>document.write(new Date().getFullYear())</script>{' '}
            <a href="https://erhamza.tech">Er. Mohd Hamza</a> All Rights
            Reserved
          </p>
        </div>
      </footer>
    </>
  )
}

export default MyFooter
