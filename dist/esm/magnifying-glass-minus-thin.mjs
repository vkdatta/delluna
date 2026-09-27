export const name="magnifying-glass-minus-thin";
export const id="dl_23ecef32897b48c8b76e";
export const url=new URL("../icons/magnifying-glass-minus-thin.svg?v=0c89db4c0de72498e0c0a50a12f5b52268237de957991899e15636741abdcf04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
