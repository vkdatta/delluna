export const name="takeout_dining";
export const id="dl_038e80de5310a13ab55f";
export const url=new URL("../icons/takeout_dining.svg?v=b354dc7a2adebde0013f6a63dfde470315e0b8c8f55d0ca5e5891d0a9b751f52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
