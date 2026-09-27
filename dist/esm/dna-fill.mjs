export const name="dna-fill";
export const id="dl_d590f9fb70b3455da036";
export const url=new URL("../icons/dna-fill.svg?v=856774b1e934f3b35a6fadd908113fb3e251882d74916c4327b985518123fc3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
