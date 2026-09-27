export const name="speaker-low";
export const id="dl_ad390ecc8dc3febde3e2";
export const url=new URL("../icons/speaker-low.svg?v=948e646abd6903d13a1c1d7e6faf69d0f3f0cdd35f7be01bf735f923090fa015",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
