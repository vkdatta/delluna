export const name="lucid_2-file-terminal";
export const id="dl_26a79aae0e4148ebb08d";
export const url=new URL("../icons/lucid_2-file-terminal.svg?v=c20273f791f06885a5f5012beda7e1c4100de512ebf937eb9e1df5d6e5561375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
