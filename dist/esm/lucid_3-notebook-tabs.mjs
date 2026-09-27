export const name="lucid_3-notebook-tabs";
export const id="dl_a41e8e8ea625434c9973";
export const url=new URL("../icons/lucid_3-notebook-tabs.svg?v=d0d069191b12d65755d61e8af2675e9d64a8d96a59dca3781c338f2382a95610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
