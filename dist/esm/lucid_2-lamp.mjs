export const name="lucid_2-lamp";
export const id="dl_a680ce91714e4c719be8";
export const url=new URL("../icons/lucid_2-lamp.svg?v=cee130b7e9353cef5d0707b2f761926b404bcb1996d64619c4a5f93a7ac40d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
