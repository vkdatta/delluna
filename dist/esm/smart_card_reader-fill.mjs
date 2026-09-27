export const name="smart_card_reader-fill";
export const id="dl_b365d11d8b042df84aaf";
export const url=new URL("../icons/smart_card_reader-fill.svg?v=b558eb0339d83db7d9132000ad4f89afb0648bc554f2f34ea6db406b73791566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
