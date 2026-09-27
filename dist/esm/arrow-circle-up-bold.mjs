export const name="arrow-circle-up-bold";
export const id="dl_92fe60d1d1ea4fc1a380";
export const url=new URL("../icons/arrow-circle-up-bold.svg?v=c905a484e7a75575d29b404b5f778140b887af8317e1f9b5924aeeaad92fc06d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
