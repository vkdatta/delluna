export const name="option-light";
export const id="dl_3a2611e0a95e4c6a9118";
export const url=new URL("../icons/option-light.svg?v=8fced3db26772d9978d7a2c9bfaf2534505679cbc7a3d0067233b0fdc6bbfd83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
