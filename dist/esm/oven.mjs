export const name="oven";
export const id="dl_6ba215eef383411f8857";
export const url=new URL("../icons/oven.svg?v=52d8b772f2e1ab041a759d07ce27fe80f29094e586acdcca5c3c7e69ef361ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
