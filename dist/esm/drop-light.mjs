export const name="drop-light";
export const id="dl_ec76e7738d754c248fd4";
export const url=new URL("../icons/drop-light.svg?v=d96fc9400fcd1abfe15eb192d2bec39940308261bcfcfa57dec1c55f5d70481a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
