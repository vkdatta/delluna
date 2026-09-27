export const name="arrow-bend-down-right-bold";
export const id="dl_772aa05da92d41eda53b";
export const url=new URL("../icons/arrow-bend-down-right-bold.svg?v=b010c0a5c5e9f4c31a7a8095de17518d12f4d0d3664e5e0257a57fca3de16c73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
