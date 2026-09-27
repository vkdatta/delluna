export const name="folder-simple-dashed-thin";
export const id="dl_fbccedaa3092412fae67";
export const url=new URL("../icons/folder-simple-dashed-thin.svg?v=5ffa76f0149e4c379b05c6d3379d532ff4c93c22922937482e3595f906d4598c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
