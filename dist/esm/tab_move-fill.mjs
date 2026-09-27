export const name="tab_move-fill";
export const id="dl_41b67092d33edb457df0";
export const url=new URL("../icons/tab_move-fill.svg?v=4713c1e0ff8457e6fc977bb78876892c7b177d7ffe5c258ddeec6bf0ed58cfb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
