export const name="acupuncture-fill";
export const id="dl_be763df32b36bc810c82";
export const url=new URL("../icons/acupuncture-fill.svg?v=25326c50aea36421ca14cf342df8f24edb43092a87b093bdd401f20b8963e513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
