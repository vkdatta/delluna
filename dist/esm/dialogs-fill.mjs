export const name="dialogs-fill";
export const id="dl_ebc470ce300d50be9a6d";
export const url=new URL("../icons/dialogs-fill.svg?v=53012a7130a6cdc33595c3fbe9f316d8a156b4b604009f6e75fbfb244d9525e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
