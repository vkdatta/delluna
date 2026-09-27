export const name="number-square-zero-fill";
export const id="dl_ef07fa353c7e471bacc6";
export const url=new URL("../icons/number-square-zero-fill.svg?v=21c9b5acac70d2926269f6fc13aad59a67c55418c511f3c260547f1fae27b961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
