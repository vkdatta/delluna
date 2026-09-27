export const name="box";
export const id="dl_f0df7721affeda75ccab";
export const url=new URL("../icons/box.svg?v=28a7fbb82a2236789849fa4ba02858d87d9080c1618eb9e705210b64bc41a76b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
