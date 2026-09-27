export const name="lucid_3-pi";
export const id="dl_b7ed59f03aa24ce09c9f";
export const url=new URL("../icons/lucid_3-pi.svg?v=2cd52a702a7d53f685b80ea30a6f87991b6bed4df079a8a745ff3b24310ee1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
