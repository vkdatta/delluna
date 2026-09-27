export const name="arrow-bend-up-left-bold";
export const id="dl_bc2ff91f9e514d45ac44";
export const url=new URL("../icons/arrow-bend-up-left-bold.svg?v=0289ce624f7122e2d1fb558493520bdbceafbfbda3b7702456db79d00a45fb34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
