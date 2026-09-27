export const name="equalizer";
export const id="dl_358bc9a91a1345528fc2";
export const url=new URL("../icons/equalizer.svg?v=7ba673a58bc8c2a2b30a9cfeeb0f5ff86f3ff18b510a9aa0fd075ea4adfa86e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
