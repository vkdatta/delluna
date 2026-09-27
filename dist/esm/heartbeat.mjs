export const name="heartbeat";
export const id="dl_6ce9a2f7c746487aa5f8";
export const url=new URL("../icons/heartbeat.svg?v=07d53d55732a73a42f82118fe1f892ab8a345fa494e8d7833202c4c70d6a5189",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
