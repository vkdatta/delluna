export const name="nest_eco_leaf";
export const id="dl_aeae7dd685b04086bbae";
export const url=new URL("../icons/N/nest_eco_leaf.svg?v=386735b659520d21c0384537f5cfa8a000437e6c48f76492d465398f0d89c62d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
