export const name="foot_bones";
export const id="dl_444caac04fc3c3cfe1e8";
export const url=new URL("../icons/foot_bones.svg?v=b303c9f168b250854742c158ca6f05584704b3941e1b6f8a5cef0a025ede9556",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
