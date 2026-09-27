export const name="lucid_3-power";
export const id="dl_4559f4e6212549589861";
export const url=new URL("../icons/lucid_3-power.svg?v=d7b09347579afb55f57a6df190bd731163183011277a73ec13bccf25d0001ae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
