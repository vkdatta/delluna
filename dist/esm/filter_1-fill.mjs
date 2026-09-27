export const name="filter_1-fill";
export const id="dl_4af326279bc012c518c3";
export const url=new URL("../icons/filter_1-fill.svg?v=bf1dc4240597116cf36bffb98a2f11177cb1e94fbba3763b53055acec8e2bbe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
