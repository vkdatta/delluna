export const name="bathtub-light";
export const id="dl_47744aab0c8c4f14a2f7";
export const url=new URL("../icons/bathtub-light.svg?v=115af8902d90fb35edfa022aed1495479538254096d0384bb1ed5afdfb0a4f98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
