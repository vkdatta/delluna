export const name="seal-percent-fill";
export const id="dl_f336f7e0f5bffdd06bae";
export const url=new URL("../icons/seal-percent-fill.svg?v=36a7acf99401a2b3ce1d0c6a7140ee143e5c16928067c09f9a5b5c4ee6451c8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
