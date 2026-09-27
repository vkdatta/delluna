export const name="lucid_3-printer";
export const id="dl_28997569ec174f92be79";
export const url=new URL("../icons/lucid_3-printer.svg?v=0fd4acfefdab8b105e115ad7736b3267d8922456f7716c4d8edc95a042e5029b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
