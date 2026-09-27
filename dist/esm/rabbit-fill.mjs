export const name="rabbit-fill";
export const id="dl_a8fd9076b5e84a97aa4b";
export const url=new URL("../icons/rabbit-fill.svg?v=bd1e1bdb41a68c86223cb4ad29d6bd4499f9126e49452539fc865b73ac8ff51e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
