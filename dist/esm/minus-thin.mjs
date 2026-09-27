export const name="minus-thin";
export const id="dl_6f890dfca2fb46c09436";
export const url=new URL("../icons/minus-thin.svg?v=bf694f3b876a0751d4725b56996aec237d3974e536f029c67e4196d4c053eb3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
