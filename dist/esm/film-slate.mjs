export const name="film-slate";
export const id="dl_2ef6b07832084c868c66";
export const url=new URL("../icons/film-slate.svg?v=0bf50ecfc130a46f565fafec87267c3135676dbfb33fe3ea4886dc63aa4e2794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
