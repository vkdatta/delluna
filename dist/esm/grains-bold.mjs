export const name="grains-bold";
export const id="dl_607c0b03ad464defb8d9";
export const url=new URL("../icons/grains-bold.svg?v=ebb4c57892a3312b99628686d1e323b6fc4b32ff00952926d038c1bb8beed8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
