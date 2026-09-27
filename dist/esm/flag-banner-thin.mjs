export const name="flag-banner-thin";
export const id="dl_ceec6c393d6741f49918";
export const url=new URL("../icons/flag-banner-thin.svg?v=a9ad2ada27d2285e1d215c01bd7008cf928e47de87bdec579e3191964da4e15d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
