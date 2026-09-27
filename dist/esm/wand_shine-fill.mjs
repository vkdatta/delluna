export const name="wand_shine-fill";
export const id="dl_dd4dd08e2a13d372abf7";
export const url=new URL("../icons/wand_shine-fill.svg?v=ce5e06c488ee6853f756d509059252cb12bfd0547a33b43248d927e74c3bafc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
