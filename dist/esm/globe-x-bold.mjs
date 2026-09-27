export const name="globe-x-bold";
export const id="dl_925e9f2e41444a028ac9";
export const url=new URL("../icons/globe-x-bold.svg?v=a16cc4006b0f59dc9e3d7aa68cc28380c5b535267f217d22f85aa0d1f2676f87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
