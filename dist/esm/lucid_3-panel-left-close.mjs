export const name="lucid_3-panel-left-close";
export const id="dl_12ae4e6bff64423aa239";
export const url=new URL("../icons/lucid_3-panel-left-close.svg?v=63b092ba8fc6a1bb4746574b6077ba0d86174e418c63f6c6971590a0f5a87ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
