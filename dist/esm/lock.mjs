export const name="lock";
export const id="dl_6ec845ad06e2c8b01460";
export const url=new URL("../icons/lock.svg?v=aaff9ea88abd20697edb4fe18a7ea6d11f6128d216870c96cf0392eeb54c520b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
