export const name="lucid_2-fishing-rod";
export const id="dl_ae11d52ebba644c3ac13";
export const url=new URL("../icons/lucid_2-fishing-rod.svg?v=c7427bed2105c2d94cf3be03026e58c8631efeb5f7e64edb9d89e0a1899789d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
