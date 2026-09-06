export const name="folder-simple-user-thin";
export const id="dl_275f8855b8054d959206";
export const url=new URL("../icons/folder-simple-user-thin.svg?v=ce69a5f9aacab7a49f240031ba0aac393450e3302c2c2ad9a51d9677efcc7aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
