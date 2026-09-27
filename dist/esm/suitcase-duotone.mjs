export const name="suitcase-duotone";
export const id="dl_051942ea6c2f45991032";
export const url=new URL("../icons/suitcase-duotone.svg?v=beefdc122356d35daab596917562eff3d99e9634c8429789ce61af403ea68047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
