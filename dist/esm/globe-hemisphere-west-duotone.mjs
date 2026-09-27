export const name="globe-hemisphere-west-duotone";
export const id="dl_6fe36e3dc5f941b89fd2";
export const url=new URL("../icons/globe-hemisphere-west-duotone.svg?v=e519912e833f05df63d323b262e360debbed3ac0a6a2472c7999b8139b2efa55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
