export const name="globe-hemisphere-west-duotone";
export const id="dl_6fe36e3dc5f941b89fd2";
export const url=new URL("../icons/globe-hemisphere-west-duotone.svg?v=52a225637cebbe67a961f6066f2ef9c29a73b9645e78258bd39e6bb2f4784bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
