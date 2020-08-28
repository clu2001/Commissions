import React from "react"; 


class Cursor extends React.Component {

    render() {
        return (
            <body class="tutorial">
                <main class="page">
                    <div class="page__inner">
                        
                        {/*<!-- The cursor elements --> */}
                        <div class="cursor cursor--small"></div>
                        <canvas class="cursor cursor--canvas" resize></canvas>
                    </div>
                </main>
            </body>
        )
    }
}

export default Cursor; 