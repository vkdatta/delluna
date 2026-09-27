export const name="lucid_2-flower-2";
export const id="dl_cd8b993ca9a049afa77e";
export const url=new URL("../icons/lucid_2-flower-2.svg?v=a25e48f790b065a9450f310995f58f9437ebcf23dba86c9ef8c8da9e6f7ef7e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
