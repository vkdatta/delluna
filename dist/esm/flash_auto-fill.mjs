export const name="flash_auto-fill";
export const id="dl_5f2417458368c5c80067";
export const url=new URL("../icons/flash_auto-fill.svg?v=16362a2f5d59c3a932272c230a64c01982fed8c96ecb8019357cb83e736cee63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
