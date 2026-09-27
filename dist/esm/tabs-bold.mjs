export const name="tabs-bold";
export const id="dl_1bd14e414bf97583e33a";
export const url=new URL("../icons/tabs-bold.svg?v=635de99087654e87421e5166b9d0339945aa7277039fd3b6925c8267cf592329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
