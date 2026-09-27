export const name="lucid_2-indian-rupee";
export const id="dl_78fec6d46574485b8acb";
export const url=new URL("../icons/lucid_2-indian-rupee.svg?v=423ad1e098f00ae5dc3b27f72f688289cacb8fe70f84ae686586dd96088c9f99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
