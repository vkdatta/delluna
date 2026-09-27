export const name="pallet-fill";
export const id="dl_1354199b3666c5ccdd8d";
export const url=new URL("../icons/pallet-fill.svg?v=d00f2e52ab15a6d6276f24903c8b7a0c8340f7fb61e14d9b367ba80d9b9ed77e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
