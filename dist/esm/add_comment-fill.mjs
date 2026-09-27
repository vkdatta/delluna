export const name="add_comment-fill";
export const id="dl_9d5e1980f34f543f7eaa";
export const url=new URL("../icons/add_comment-fill.svg?v=a2134d27a0c9df8f43377b0b15ef26a48c0b9094dd6f0fe447977fc5b74c7c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
