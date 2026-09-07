export const name="faders-thin";
export const id="dl_543ce05a87f543b2baaa";
export const url=new URL("../icons/faders-thin.svg?v=c1d526d9197998584abab1f89f377b9605c1c7d21ee0da47087f751f0a2c5607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
