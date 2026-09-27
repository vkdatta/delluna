export const name="sms-fill";
export const id="dl_d1db8df735ee49e82b45";
export const url=new URL("../icons/sms-fill.svg?v=5745b47862e41ef5073cbdc177c2ed29d23ec60d102066aa7e2617fbac0505a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
