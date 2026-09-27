export const name="gas-can-bold";
export const id="dl_92114730ff4b448e8193";
export const url=new URL("../icons/gas-can-bold.svg?v=257abc328447f5b9627d8c6298ff694d3fe923496abe7bec7b48ee9aa3d86626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
