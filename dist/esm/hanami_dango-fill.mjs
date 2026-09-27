export const name="hanami_dango-fill";
export const id="dl_4e063571157f42e1322e";
export const url=new URL("../icons/hanami_dango-fill.svg?v=afce992548e23d92b4ef7add21286c8971769c9795e9419632f7583dd03ebcdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
