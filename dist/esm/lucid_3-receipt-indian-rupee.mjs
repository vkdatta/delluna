export const name="lucid_3-receipt-indian-rupee";
export const id="dl_d6803d5dc8cb48ab8a88";
export const url=new URL("../icons/lucid_3-receipt-indian-rupee.svg?v=6ca81f87476c410b91083e559631cd5ffdceb76bdb1ad7902524bd34140b9004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
