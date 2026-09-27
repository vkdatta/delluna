export const name="lucid_3-panel-left-close";
export const id="dl_12ae4e6bff64423aa239";
export const url=new URL("../icons/lucid_3-panel-left-close.svg?v=e726f724dc2850963ad8edeb8dd541a5f1c8076540bbdd036788bd1d2e3c7e7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
