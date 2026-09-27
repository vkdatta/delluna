export const name="encrypted_add";
export const id="dl_36705b9725a2863233d7";
export const url=new URL("../icons/encrypted_add.svg?v=6372629d48d0dc4ada49bc92f1331ffcfe312e39af2714db9763166168d9a2b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
