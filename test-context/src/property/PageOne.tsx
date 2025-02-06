
export default function PageOne() {
    return (
        <>
            <div>
                <h1>Page One</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <button>次へ</button>
            </div>
        </>
    );
}