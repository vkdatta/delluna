export const name="suitcase-simple-light";
export const id="dl_d9513d337ecba9f21d0d";
export const url=new URL("../icons/suitcase-simple-light.svg?v=ad58f9234cc404a559aa4f81e39426b1196bd3cee154a0443c6f3fecfe621bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
