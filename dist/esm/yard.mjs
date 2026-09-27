export const name="yard";
export const id="dl_4ed52aa75f1eff4ebdce";
export const url=new URL("../icons/yard.svg?v=dea5b9d84bf1482803110cfcfa45c89c02ff88b2c0ae35298d8f71dc83287ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
