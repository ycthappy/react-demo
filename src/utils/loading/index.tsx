import ReactDOM from 'react-dom/client'
import Loading from './loading'

let count = 0
export const showLoading = ()=>{
    count ++
    if(count === 1) {
        let loading = document.createElement('div')
        loading.setAttribute('id','loading')
        document.body.appendChild(loading)
        ReactDOM.createRoot(loading).render(<Loading />)
        return
    }
    
    
}

export const hiddenLoading = ()=>{
    if(count<=0) return
    if(count  === 1){
        const loading = document.getElementById('loading') as HTMLDivElement
        document.body.removeChild(loading)
    }
    count --
}