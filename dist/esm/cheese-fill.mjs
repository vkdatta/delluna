export const name="cheese-fill";
export const id="dl_37bea35e969643ea989a";
export const url=new URL("../icons/cheese-fill.svg?v=cb2996f8f7aebcf5e560bf9c90baa2e302dcbd157a4216d00aa64067b8633bdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
