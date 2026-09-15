export const name="curtains-fill";
export const id="dl_7ba8edc8049646288359";
export const url=new URL("../icons/C/curtains-fill.svg?v=8855922ade764cf321f5a0fbae4026d925ef18334b65501ed53e935046885f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
