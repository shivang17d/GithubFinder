import { OrganizationIcon, LocationIcon, LinkIcon } from "@primer/octicons-react";

const getDateString = (dateVal) => {
    const date = new Date(dateVal).toDateString().split(" ");
    return `${date[2]} ${date[1]}, ${date[3]}`;
}

const Profile = (props) => {
    const dataObj = props.data;
    console.log(dataObj)

    const avatarStyleObj = {
        backgroundImage: `url(${dataObj.avatar_url})`
    }
    
    return (
        <div className="profile">
            <div className="card-header">
                <div className="avatar" style={avatarStyleObj}></div>
                <div className="description">
                    <div className="names">
                        <div>
                            <span className="name">{dataObj.name || dataObj.login}</span>
                            <br/>
                            <span className="username">@{dataObj.login}</span>
                        </div>
                        <div className="joinDate">
                            Joined &nbsp; {getDateString(dataObj.created_at)}
                        </div>
                    </div>

                    <p className="bio lessOpaque">
                        <br/>
                        {dataObj.bio || "Bio not available"}
                    </p>
                </div>
            </div>
            <p className="bio lessOpaque">
                <br/>
                {dataObj.bio || "Bio not available"}
            </p>
            <br/>
            <div className="stats">
                <div className="statBox">
                    <span className="statBox-header">Repos</span>
                    <span className="statBox-value">{dataObj.public_repos}</span>
                </div>
                <div className="statBox">
                    <span className="statBox-header">Gists</span>
                    <span className="statBox-value">{dataObj.public_gists}</span>
                </div>
                <div className="statBox">
                    <span className="statBox-header">Following</span>
                    <span className="statBox-value">{dataObj.following}</span>
                </div>
                <div className="statBox">
                    <span className="statBox-header">Followers</span>
                    <span className="statBox-value">{dataObj.followers}</span>
                </div>
            </div>
            <br/>
            <div className="details">
                <div className={"field" + (!!dataObj.company ? " lessOpaque" : "")} title="Company">
                    <OrganizationIcon size={20} />
                    <span className="field-value">{dataObj.company || "Not Available"}</span>
                </div>
                <div className={"field" + (!!dataObj.location ? " lessOpaque" : "")} title="Location">
                    <LocationIcon size={20} />
                    <span className="field-value">{dataObj.location || "Not Available"}</span>
                </div>
                <div className={"field" + (!!dataObj.blog ? " lessOpaque" : "")} title="Website">
                    <LinkIcon size={20} />
                    <span className="field-value">
                        {
                            dataObj.blog ?
                            <a href={dataObj.blog} target="_blank" rel="noopener noreferrer">{dataObj.blog}</a> :
                            "Not Available"
                        }
                    </span>
                </div>
                <div className={"field" + (!!dataObj.twitter_username ? " lessOpaque" : "")} title="Twitter username">
                    <span className="twitter-icon"></span>
                    <span className="field-value">{dataObj.twitter_username || "Not Available"}</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;