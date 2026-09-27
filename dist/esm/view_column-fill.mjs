export const name="view_column-fill";
export const id="dl_26f9f170d21b57c1675a";
export const url=new URL("../icons/view_column-fill.svg?v=199d1322295b9c3e91fd7cde99a802c1f1f792f606ddfc4d78b95ce0fe5c258b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
