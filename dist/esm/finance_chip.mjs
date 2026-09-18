export const name="finance_chip";
export const id="dl_946d83721fe64e30b215";
export const url=new URL("../icons/finance_chip.svg?v=2f1eac85abe01fa535221306ad20f16ff8baf1423ef9739be05ce728275cc46f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
