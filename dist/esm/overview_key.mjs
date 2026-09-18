export const name="overview_key";
export const id="dl_a17af78eb06f4e3f860a";
export const url=new URL("../icons/overview_key.svg?v=0a1b62dd9c5078bfaba27f66171eda8075093060124af534794ab8d66573a47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
