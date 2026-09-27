export const name="app-window";
export const id="dl_92aed84ac14c45f39693";
export const url=new URL("../icons/app-window.svg?v=2c12852132b782271902638aa9c3ec44c253503a8e784877f4c6b8cc77aed8a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
