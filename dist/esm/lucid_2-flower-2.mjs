export const name="lucid_2-flower-2";
export const id="dl_cd8b993ca9a049afa77e";
export const url=new URL("../icons/lucid_2-flower-2.svg?v=6f26376303b960b21ab03f5aa6efb2c6bba8aa9659fe6f71541f86ec59f6b895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
