export const name="globe-stand";
export const id="dl_b106e72d7b534ff59d5e";
export const url=new URL("../icons/globe-stand.svg?v=3d7ccb767859961f833b11d2f30134790aaaca70e41a677f7e63cc7c686e0126",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
