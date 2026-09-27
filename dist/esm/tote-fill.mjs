export const name="tote-fill";
export const id="dl_bf77889f11390879780b";
export const url=new URL("../icons/tote-fill.svg?v=191405c008465a48ec209f4381f86a186f7ed7a1767af100858f7b839098d6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
