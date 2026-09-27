export const name="rheumatology-fill";
export const id="dl_7f57ac0cd5f9fc034e9c";
export const url=new URL("../icons/rheumatology-fill.svg?v=a8c7b2b3eebd7d7389bfe0c07f04773608437b39cbc43aff32b70be5e88e480d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
