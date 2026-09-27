export const name="rainbow-cloud-light";
export const id="dl_384bd2898ded45c48c29";
export const url=new URL("../icons/rainbow-cloud-light.svg?v=44cbf9a8a07d9cce29054584aa8d3e43cc314a27cff4eb06747de67a81b80bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
