export const name="grid-nine-bold";
export const id="dl_6de73c01abd64d5eaa9b";
export const url=new URL("../icons/grid-nine-bold.svg?v=ce65dd6b2afb9ce34b980b5832ab6ccea5f175417e374ce4f6e4d8d0b5056b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
