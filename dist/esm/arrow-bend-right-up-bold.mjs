export const name="arrow-bend-right-up-bold";
export const id="dl_89b89b190c374296aa2f";
export const url=new URL("../icons/arrow-bend-right-up-bold.svg?v=aeb19d7cf22496aab8e179f35176f4b7764c661ef7434778e1470b48fc20db50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
