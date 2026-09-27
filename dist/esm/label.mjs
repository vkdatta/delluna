export const name="label";
export const id="dl_75f1b89c038fe2e48291";
export const url=new URL("../icons/label.svg?v=ee6460fd828c42ad7236ade22a99931ea05d5c5d43572f99c29881d6f1d83398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
