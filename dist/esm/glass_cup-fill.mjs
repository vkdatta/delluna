export const name="glass_cup-fill";
export const id="dl_8039924d67024eaeb20f";
export const url=new URL("../icons/glass_cup-fill.svg?v=7ade66fcc5782491a6e814b1d79d49c26b19e63cc8e2ce29e8bb7b8d6e48dfd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
