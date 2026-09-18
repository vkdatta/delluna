export const name="speed_1_7x";
export const id="dl_5a237ad3eb714f559ce7";
export const url=new URL("../icons/S/speed_1_7x.svg?v=b02b58850b7e9b2fb482309ced7fc77eee5599ddfffd79bbd7bacbc9fcb7f294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
