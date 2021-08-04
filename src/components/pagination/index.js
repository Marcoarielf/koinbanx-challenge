import './styles.css';

export default function Pagination(props) {

    const pages = [];
    const numPages = props.pages;
    const currentPage = props.currentPage;

    for (let index = 0; index <= numPages; index++) {
        pages.push(index);
    }

    const handlerClick = (setCurrentPage, page) => {
        setCurrentPage(page);
    }

    const handlerBackClick = (currentPage, setCurrentPage) => {
        setCurrentPage(currentPage-1);
    }
    const handlerNextClick = (currentPage, setCurrentPage) => {
        setCurrentPage(currentPage+1);
    }
    const handlerLastPageClick = (setCurrentPage) => {
        setCurrentPage(numPages);
    }
    const handlerFirstPageClick = (setCurrentPage) => {
        setCurrentPage(1);
    }
    
    
    return (
        <div className="container_pagination">
            {(currentPage > 3) ? (
                <span className='arrow' onClick={() => handlerFirstPageClick(props.setCurrentPage)}>&#8920;</span>
            ) : ''} 
            {(currentPage >1) ? (
                <span className='arrow' onClick={() => handlerBackClick(currentPage, props.setCurrentPage)}>&#60;</span>
            ) : ''} 
            {pages.map( (page, i) => {
                return(
                    <span className={i === currentPage ? 'active' : ''} onClick={() => handlerClick(props.setCurrentPage, page)} key={i}>{page}</span>
                )
            }).slice(currentPage,currentPage + 3)}

            {(currentPage < numPages) ? (
                <span className='arrow' onClick={() => handlerNextClick(currentPage, props.setCurrentPage)}>&#62;</span>
            ) : ''} 
            {(currentPage < numPages) ? (
                <span className='arrow' onClick={() => handlerLastPageClick(props.setCurrentPage)}>&#8921;</span>
            ) : ''} 
        </div>
    );
}
