export const name="skip-back-fill";
export const id="dl_73354f3991eb67defdbb";
export const url=new URL("../icons/skip-back-fill.svg?v=f14025400460c38c1bc347d0ae07309c504b5a3374283e24a236ec04c7913d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
