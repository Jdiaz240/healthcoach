import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
            <nav class="navbar fixed-top">
                {/* <!-- <a href="google.com">About Me</a> --> */}
                <h3 id="namePlate">Nelson Luzbel</h3>
                <ul>
                    <li><a class="btn" href="https://www.instagram.com/nelson.luzbel/?hl=en" role="button">Instagram</a></li>
                    <li><a class="btn" href="https://www.tiktok.com/@nelsonluzbel" role="button">TikTok</a></li>
                    <li><a class="btn" href="https://open.spotify.com/show/7kaVwVi3m5NOV6UpIBxJkX?si=pth_bsDrQ_KRQS6XDde6WA&nd=1" role="button">Podcast</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
