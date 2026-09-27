export const name="lucid_1-astroid";
export const id="dl_dff38394a48444c6ac15";
export const url=new URL("../icons/lucid_1-astroid.svg?v=19ef4dbe34011354b5a97b547ab680ee593363e82866018a896a1176ef30d9ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
