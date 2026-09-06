export const name="house-light";
export const id="dl_161ec25e24bc4ff09914";
export const url=new URL("../icons/house-light.svg?v=490d0a589e421622cdc0bbb511dc6fd6959fbee6c4b7b56229b05f95ae5444ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
