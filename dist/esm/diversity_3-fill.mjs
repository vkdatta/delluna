export const name="diversity_3-fill";
export const id="dl_cc0be26a0610faa1abf3";
export const url=new URL("../icons/diversity_3-fill.svg?v=5e1235a7d2aa70c5e9c0d823813d185480da545624446c1a34ab58a4513ca7d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
