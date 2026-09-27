export const name="lucid_3-rectangle-circle";
export const id="dl_738e6ce223804ca18267";
export const url=new URL("../icons/lucid_3-rectangle-circle.svg?v=63cc145bc29d15137989616726ce2910da802e956881d9f6d247921ec93bf716",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
