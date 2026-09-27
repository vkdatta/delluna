export const name="text-h-two-fill";
export const id="dl_a01181b0c1ee4a23bbf7";
export const url=new URL("../icons/text-h-two-fill.svg?v=1f1a0021669ad9001a80e4025d0249bcc9f1eea2b483d63b48d3212067e33604",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
