export const name="uppercase-fill";
export const id="dl_b08f36c367d24e40b22d";
export const url=new URL("../icons/U/uppercase-fill.svg?v=bd220c886ffa53ca011b18077c1af1f52a6b07716729f21cdb566232aa7275d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
