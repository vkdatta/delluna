export const name="lucid_3-plug";
export const id="dl_f9aa33520b4c45cdaf16";
export const url=new URL("../icons/lucid_3-plug.svg?v=dfb6e3ed2e3e1ee2f3d4b5e39b5830e613601c03bec483ebfed13d2ca95b1318",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
