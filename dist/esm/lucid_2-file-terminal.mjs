export const name="lucid_2-file-terminal";
export const id="dl_26a79aae0e4148ebb08d";
export const url=new URL("../icons/lucid_2-file-terminal.svg?v=5e206d14afc4292fe2d2710592782c0f880cdbc98ae2ec3c7fe5d1cdd44cfe3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
