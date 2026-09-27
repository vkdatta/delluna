export const name="sticker-thin";
export const id="dl_4ff9ca0c45dc2a4b3ca2";
export const url=new URL("../icons/sticker-thin.svg?v=4dc3ef0351b114e05c573901b1a501720747d89407925d77616e6638e82463ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
