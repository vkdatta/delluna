export const name="add_card-fill";
export const id="dl_7ec55f89e9b4890ffe09";
export const url=new URL("../icons/add_card-fill.svg?v=22b5e8289fc525bf24b0bac7455a3f168a73f81955746952d0f3f81b9c15249a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
