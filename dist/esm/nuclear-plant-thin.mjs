export const name="nuclear-plant-thin";
export const id="dl_e8f8eda19b624663959f";
export const url=new URL("../icons/nuclear-plant-thin.svg?v=07d2e396d5ecf84449479a9f048442052eaae6c4e2dfdabf6bbaa15fba67d93b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
