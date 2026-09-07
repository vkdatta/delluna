export const name="gender-nonbinary-bold";
export const id="dl_c7d892f375dc4a1fa70a";
export const url=new URL("../icons/gender-nonbinary-bold.svg?v=251dc83d4898c72caa013a0c2d6914cf775ba28d0798c1a663401862a80da196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
