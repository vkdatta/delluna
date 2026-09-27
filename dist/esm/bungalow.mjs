export const name="bungalow";
export const id="dl_e73ae97dd2075b5e3e39";
export const url=new URL("../icons/bungalow.svg?v=902c34eecbe1dafb2ee8eec1495608200de3b8c704e8da05f419a24aaf610a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
