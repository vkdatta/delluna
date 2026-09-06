export const name="gender-male-light";
export const id="dl_1e0201451ba44386bde3";
export const url=new URL("../icons/gender-male-light.svg?v=18d7a01722351190ee6b552e9bba99d9c11d56aa26790ca5c9b87224a5a9d044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
