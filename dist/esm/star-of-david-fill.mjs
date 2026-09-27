export const name="star-of-david-fill";
export const id="dl_7a35ee909584e1967c2c";
export const url=new URL("../icons/star-of-david-fill.svg?v=8b462efef1c1b3ee77049869078b19df7c019570a68e137f9fa0ad5454e82428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
