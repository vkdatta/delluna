export const name="lucid_3-pencil-line";
export const id="dl_06b3aae398f14f9287ee";
export const url=new URL("../icons/lucid_3-pencil-line.svg?v=45aa205bbffca175efd5960bd0350d7a606c1ff2ff038dabe9aded49cee8d1ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
