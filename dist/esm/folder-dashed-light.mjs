export const name="folder-dashed-light";
export const id="dl_c47422244e8b4807a0bb";
export const url=new URL("../icons/folder-dashed-light.svg?v=d20e0bf24c2b97e3f7d912e6aa39f4254ef876c01facd9027dd4ab415df87bbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
