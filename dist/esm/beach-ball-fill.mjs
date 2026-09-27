export const name="beach-ball-fill";
export const id="dl_c35b8dfc1a8f438594e3";
export const url=new URL("../icons/beach-ball-fill.svg?v=871fbeb15cf276a0646892da00aaa2057069f8eed3b16f0bcd7d8624618b934a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
