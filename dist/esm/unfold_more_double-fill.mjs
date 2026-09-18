export const name="unfold_more_double-fill";
export const id="dl_3b6bd04fb2124821bdf4";
export const url=new URL("../icons/U/unfold_more_double-fill.svg?v=fdbcf6bcdb9fb2a40e508eb3c244b36f10fd184cb6655f234458a1baa9b1825e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
