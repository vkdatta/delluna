export const name="download_for_offline";
export const id="dl_2a677e3f4c7b9c088c4a";
export const url=new URL("../icons/download_for_offline.svg?v=fb7bbaa8dca1dc4a87ef17fc86c99bcd3935dea9a74b8ea9d8e51cc34ea7819f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
