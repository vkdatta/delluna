export const name="conversation";
export const id="dl_124f01caa9f96df2a688";
export const url=new URL("../icons/conversation.svg?v=620319f42ed91e7e0a5ac3798bc34459109af9a3d7ddef36ed04b56b88c91b55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
