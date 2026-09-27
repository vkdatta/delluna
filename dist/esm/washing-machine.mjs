export const name="washing-machine";
export const id="dl_ff6b0a8aaf2d9a4fe16d";
export const url=new URL("../icons/washing-machine.svg?v=1927433748f4d74f182112201894ac018c278f60e3f3177655d7e5e14244c024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
