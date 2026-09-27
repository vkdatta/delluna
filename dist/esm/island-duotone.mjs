export const name="island-duotone";
export const id="dl_8e6c9a5b53e84d368a44";
export const url=new URL("../icons/island-duotone.svg?v=565259ba864d3404efa75d4ac2bf433bed3ddfc5edc15ada22fbb8b8cc400d1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
