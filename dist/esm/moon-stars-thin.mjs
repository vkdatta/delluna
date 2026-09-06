export const name="moon-stars-thin";
export const id="dl_77a6d25b39554ed0b2cd";
export const url=new URL("../icons/moon-stars-thin.svg?v=1d42a4f871d5f217d96398d207a8328df3c3529730a25cb68fc95f027fbd3e47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
