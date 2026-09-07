export const name="arrows-vertical-thin";
export const id="dl_5c279a302719432bbeb2";
export const url=new URL("../icons/arrows-vertical-thin.svg?v=71734ee44daca185e713a7b2a29d0b5098b37f2cbe018343926663f4024e9ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
