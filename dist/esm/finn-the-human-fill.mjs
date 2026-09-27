export const name="finn-the-human-fill";
export const id="dl_8f15478f866d421c9bfa";
export const url=new URL("../icons/finn-the-human-fill.svg?v=98772b3c9a0a711e70e00a4bcc6f42931526359d52342ad101a4d35b24907ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
