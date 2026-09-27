export const name="counter_1-fill";
export const id="dl_82b8e283199eb28b40a5";
export const url=new URL("../icons/counter_1-fill.svg?v=1e93465ddab5cdcace97916c2c49f150946ff75707f9375fe82077a74eb2906b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
