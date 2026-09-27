export const name="user_attributes";
export const id="dl_1b3f9e660df62d98c2ad";
export const url=new URL("../icons/user_attributes.svg?v=6a0ad8d40867c057d224d04441d3574de950177b9562623a1c3c41535a8be4bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
