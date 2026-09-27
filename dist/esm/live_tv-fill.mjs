export const name="live_tv-fill";
export const id="dl_ddcd1d56826b41d737b2";
export const url=new URL("../icons/live_tv-fill.svg?v=dbdb12b501c50d793ca5006ec7f9626d0644c58682bbb1bbaf0a1c4b8889a81d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
