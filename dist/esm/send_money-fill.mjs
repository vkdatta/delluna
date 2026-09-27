export const name="send_money-fill";
export const id="dl_e24e87e072726b111e1f";
export const url=new URL("../icons/send_money-fill.svg?v=5c62337c2fc889d9870ab2247cc34fdaafa9a8ee257bb02e5d8b44613207b0bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
