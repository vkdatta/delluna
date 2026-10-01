export const name="folder_supervised-fill";
export const id="dl_4b254c26fb5e4b25d2ee";
export const url=new URL("../icons/folder_supervised-fill.svg?v=198af23ea81a6437a9cb3df2b6fdacf988cc5363b152edecd0ced08d5e247e41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
