export const name="boy";
export const id="dl_8b7ca2f412fe9a9ef62c";
export const url=new URL("../icons/boy.svg?v=4a2a6217288caee350d4caa791dc5a0fc302257beb5fe8d32dbb15d91db2ea0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
