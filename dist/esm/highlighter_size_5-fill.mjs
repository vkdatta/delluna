export const name="highlighter_size_5-fill";
export const id="dl_b63d6a3e3867049785a5";
export const url=new URL("../icons/highlighter_size_5-fill.svg?v=9dfe34b6dfd50533f8bd457196a69fd457091a7273883f12731a5a67aee38bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
