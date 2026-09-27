export const name="audio_description-fill";
export const id="dl_90f818ee1eb0760ad822";
export const url=new URL("../icons/audio_description-fill.svg?v=b13b2d78079a0249f8d9e9606f0bc86ed3839739eaf95e2a34f9837f34d34f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
