export const name="stars-fill";
export const id="dl_5032efecadb395a210c6";
export const url=new URL("../icons/stars-fill.svg?v=623ce5a827b986672e4beeb447117a5e0206b8e7c34f3060b6e03a5a2f8dfc89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
