export const name="lucid_1-cctv";
export const id="dl_f9c03ed5ae5141989a33";
export const url=new URL("../icons/lucid_1-cctv.svg?v=71eada5b522f0d53e89661080a4c525760d3a9678dd64d1b51d2e9927cd70683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
