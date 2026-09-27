export const name="user-circle-plus-bold";
export const id="dl_cfcea54f54491648a3c9";
export const url=new URL("../icons/user-circle-plus-bold.svg?v=5a52b55061dfa596df9cbdd707ffa017016213356a2328b7e0f4526898e98ae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
