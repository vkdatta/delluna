export const name="lucid_1-bridge";
export const id="dl_0b9a86ee9ffe46788e89";
export const url=new URL("../icons/lucid_1-bridge.svg?v=4ce3cf66c0319c0da73d7bd00a48f42002fcd72c2ec7d9b14ec1b30e1e614571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
