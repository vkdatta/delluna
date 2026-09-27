export const name="gender-intersex-thin";
export const id="dl_6fd0aa68d7134da8aa16";
export const url=new URL("../icons/gender-intersex-thin.svg?v=dae0d806f4446ff146f33de7ba3f6b42ce82de721a16bbf547d3cf19d1ac4081",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
