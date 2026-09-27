export const name="close_small";
export const id="dl_0fa614bbec7d1efc690c";
export const url=new URL("../icons/close_small.svg?v=870ff58fb0ead74a2e16b0d261151c08290524da6207d15b242d817666f92b8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
