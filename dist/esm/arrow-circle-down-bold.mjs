export const name="arrow-circle-down-bold";
export const id="dl_c8eb6d9f14ae4a0e8340";
export const url=new URL("../icons/arrow-circle-down-bold.svg?v=25eb6fb433241ea331c615dc538f8b03da55992a719bb49bfa2215fe10c0495e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
