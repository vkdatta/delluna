export const name="chalkboard-simple-duotone";
export const id="dl_c417314fb02f4da0b7bf";
export const url=new URL("../icons/chalkboard-simple-duotone.svg?v=b1154c73e5184f8a40cd40c56828548648554497d2903c0f674f57d74ba79f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
