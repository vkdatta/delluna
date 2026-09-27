export const name="notification_multiple";
export const id="dl_acb470fed43a9e3d2a61";
export const url=new URL("../icons/notification_multiple.svg?v=8fa161d51b46ef56daaa40c3d3489ecd891386753b80c4932f19023263db1384",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
