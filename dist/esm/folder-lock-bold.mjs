export const name="folder-lock-bold";
export const id="dl_a35b7230857c45c3b5d6";
export const url=new URL("../icons/folder-lock-bold.svg?v=85101d862220b3f92fe81aac7ebc975fc258ffdb78ad9cc7ac7e9bbdb4acfb37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
