export const name="lamp-pendant";
export const id="dl_e01d32823cf54564a4e9";
export const url=new URL("../icons/lamp-pendant.svg?v=1fea8dc338df5626bfe5085264d2655322395a2c439575831a64029b549546c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
