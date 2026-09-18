export const name="counter_2-fill";
export const id="dl_ecef0f1f9aa449aabf95";
export const url=new URL("../icons/counter_2-fill.svg?v=cc93d264d64e27044d9d1dee33776dae2b6f429e3ffff9b29468d46edc74d90b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
