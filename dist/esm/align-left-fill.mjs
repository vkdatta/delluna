export const name="align-left-fill";
export const id="dl_e456f98b8c964c51bbdb";
export const url=new URL("../icons/align-left-fill.svg?v=6affc3d73fe1b06de52c901a65a662584eac51e865e09a7962771762d0648617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
