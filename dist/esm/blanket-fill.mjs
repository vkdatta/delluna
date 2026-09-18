export const name="blanket-fill";
export const id="dl_1d4f2499bbf44aa095fa";
export const url=new URL("../icons/blanket-fill.svg?v=58e0a57795561d88f1afc3a48fc78d9582179dee239f1f7a82967ee7e14807c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
