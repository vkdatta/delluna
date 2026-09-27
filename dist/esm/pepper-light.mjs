export const name="pepper-light";
export const id="dl_aef3134b0d7442a68fb6";
export const url=new URL("../icons/pepper-light.svg?v=10e4bc2e61b88f0a17cde8f1f950d9c346060e4f71c17d2bcf67552ee9543246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
