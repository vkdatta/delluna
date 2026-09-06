export const name="fediverse-logo-bold";
export const id="dl_b9fa2ffbddf5435894d7";
export const url=new URL("../icons/fediverse-logo-bold.svg?v=359f500955cdd9c1c97900234e7c516d2fc829e250e6124484b7fd38027180bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
