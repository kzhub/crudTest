import axios from "axios";
import useSWR from 'swr'

const Fetch = () => {
	const fetcher = url => axios.get(url).then(res => res.data)
	const { data, error, isLoading } = useSWR('/api/hello', fetcher)

	if (error) return <div>failed to load</div>
	if (isLoading) return <div>loading...</div>

	return <div>hello {data.name}!</div>

}

export default Fetch;