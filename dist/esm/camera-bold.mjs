export const name="camera-bold";
export const id="dl_5bdfa7cdc6e84e729aa6";
export const url=new URL("../icons/camera-bold.svg?v=25ed93715e927bf516a88d8863021b5feb17a1127ae0b1b4a07f1737efe118f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
