export const name="bulldozer";
export const id="dl_9e0dcf2238de48a2a992";
export const url=new URL("../icons/bulldozer.svg?v=ca6c0c732b49d438d82a424da96001fec0417aea9b0bec9b62978cdb6355ad60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
