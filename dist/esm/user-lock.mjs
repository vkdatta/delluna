export const name="user-lock";
export const id="dl_dc5fa1bb7321412089c2";
export const url=new URL("../icons/user-lock.svg?v=58457a16ce65b4b89f830a020da94b3702292ecc61f374b02f182281a318fd85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
