export const name="lucid_1-circle-chevron-up";
export const id="dl_4c4d7ba81b574c93b5df";
export const url=new URL("../icons/lucid_1-circle-chevron-up.svg?v=ed4699725cf901b242e5f02f6b4668b88d8d8caa8a5c28c4f3d99ba4c928207e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
