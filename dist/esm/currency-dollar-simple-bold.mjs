export const name="currency-dollar-simple-bold";
export const id="dl_7f8667321e8140f6a2ea";
export const url=new URL("../icons/currency-dollar-simple-bold.svg?v=21db4fe006d63ccb09df11cf66d105903d838c46ae1f84fad49e76edcc4203e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
