export const name="live_tv";
export const id="dl_888d9485c79265731d34";
export const url=new URL("../icons/live_tv.svg?v=891d487deff656cf50ba37f1cf703283594760d21f2b0476eb09947e9ab3f463",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
