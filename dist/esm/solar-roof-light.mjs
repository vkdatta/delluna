export const name="solar-roof-light";
export const id="dl_5ecbd3ba63e917c354d5";
export const url=new URL("../icons/solar-roof-light.svg?v=eb04f68e26ea3c94f833aecc75f763e6d5d0f86c9c498fb433e1ed1cdf94d07d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
