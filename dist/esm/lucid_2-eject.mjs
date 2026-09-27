export const name="lucid_2-eject";
export const id="dl_44026a552c034924a409";
export const url=new URL("../icons/lucid_2-eject.svg?v=071986fc6a9b3090790cf8c13b5b3ed5e8486a93590cff20a46566e5f2b32fd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
