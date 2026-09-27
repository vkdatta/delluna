export const name="browsers-light";
export const id="dl_52bbe820156e4784bae7";
export const url=new URL("../icons/browsers-light.svg?v=8b775bb98e432ab944ce6ec4f0f405976bdb1ee3350d3c54bfea35ec7a3c7345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
