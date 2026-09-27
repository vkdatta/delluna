export const name="currency_franc";
export const id="dl_e7026753b6b427c4b5e0";
export const url=new URL("../icons/currency_franc.svg?v=972ff90c10b43c5d57688147eb51d8c39ca263c101560cd4bd2d31858e6df3e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
