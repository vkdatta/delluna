export const name="mapping";
export const id="dl_d604c30bd0b54572ba74";
export const url=new URL("../icons/mapping.svg?v=e3171bd3694dcbd3f74ac8f09e25a9467c24e1934469889535a74c36c5f8e9c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
