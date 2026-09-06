export const name="lucid_3-pen-line";
export const id="dl_35624e25db8c4b0d8561";
export const url=new URL("../icons/lucid_3-pen-line.svg?v=1270e4f68ef413a82029b6a08ff423585949e7060801ecb75246f62c2e4275dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
