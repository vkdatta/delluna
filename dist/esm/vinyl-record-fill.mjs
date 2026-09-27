export const name="vinyl-record-fill";
export const id="dl_8cfd9373e31c5e3c7937";
export const url=new URL("../icons/vinyl-record-fill.svg?v=947cc20f6252f271c1eb9545978958dd320720e7e2a0afa4d10e239ffbc74b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
