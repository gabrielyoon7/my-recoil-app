import Counter from "../components/counter/Counter";

function CountersPage() {
  return (
    <>
      <h1>값을 전역으로 관리하는 기능 (카운터)</h1>
      <Counter />
      <Counter />
    </>
  )
}

export default CountersPage;
