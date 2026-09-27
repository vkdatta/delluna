export const name="list-magnifying-glass-bold";
export const id="dl_605fb44c13c246ed8f0d";
export const url=new URL("../icons/list-magnifying-glass-bold.svg?v=a3a72e6d2b9f6f192a2487e37af23c3093a0aa0d7368d427b95ed759a598bf71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
