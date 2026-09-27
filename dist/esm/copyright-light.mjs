export const name="copyright-light";
export const id="dl_04b317d1d4c1476593fe";
export const url=new URL("../icons/copyright-light.svg?v=dee132881d1bc375592e7cb43a9fa6df6ed41dbf2dff919958a2bd0d4e5b0ca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
