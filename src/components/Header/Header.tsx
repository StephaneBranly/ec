import { Tabs } from '../../types';
import './Header.scss'

export interface HeaderProps { 
    activeTab: Tabs
    setActiveTab: React.Dispatch<React.SetStateAction<Tabs>>
}

const Header = (props: HeaderProps) => {
    const { activeTab, setActiveTab } = props;

    const tabs: { id: Tabs, text: string}[] = [{
        'id': 'information',
        'text': 'Identity and Medical information'
    }, {
        'id': 'notify',
        'text': 'Notify emergency services and relatives'
    }]

    const renderTabs = () => {
        return tabs.map(tab => {
            return <div className={`tab ${tab.id === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.text}</div>
        })
    }

    return (
        <header>
            <section className='page-name'>
                <h1>Emergency Card</h1>
            </section>
            <section className="tabs">
                {renderTabs()}
            </section>
        </header>
    )
}

export default Header
