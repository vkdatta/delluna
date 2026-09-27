export const name="utensils-crossed";
export const id="dl_47c46a9a65504c069a8e";
export const url=new URL("../icons/utensils-crossed.svg?v=9d8a15c4c5dffb39988dfbda237b613f3cf7deed84376894ae0fb397d82c76aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
