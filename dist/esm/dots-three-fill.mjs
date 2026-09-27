export const name="dots-three-fill";
export const id="dl_3577c9a783bc42d7b442";
export const url=new URL("../icons/dots-three-fill.svg?v=b16b2698dbcaaf06de6fc06972468cd86a9bad1e57ace529c20592fb83cfe8fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
