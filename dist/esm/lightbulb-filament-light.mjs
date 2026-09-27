export const name="lightbulb-filament-light";
export const id="dl_658122f4508a4d0592d2";
export const url=new URL("../icons/lightbulb-filament-light.svg?v=26392de71b2992c245d43b07eb7de00c325c093b94baf686baf75f420d7851dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
