export const name="tire-fill";
export const id="dl_13a711643f274794af11";
export const url=new URL("../icons/T/tire-fill.svg?v=07443e9409b30690996a254b83a2295c51b530bcf581eab2e49001a4ea5b5c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
