export const name="mobile_text_2-fill";
export const id="dl_fb47156235dc08a182d5";
export const url=new URL("../icons/mobile_text_2-fill.svg?v=03b04370e348e6e1bcf47439c9a7c1d3261ba9660d319d69334d902dc0a9015a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
