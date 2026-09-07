export const name="identification-badge-thin";
export const id="dl_b0ce5a9e2ed54d63908f";
export const url=new URL("../icons/identification-badge-thin.svg?v=b36bda4a9cd374d0471e797e8a32b925104f072b9eb97dec9e2d50ec3118a695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
