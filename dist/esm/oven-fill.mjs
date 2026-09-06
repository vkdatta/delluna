export const name="oven-fill";
export const id="dl_001353dba91b48ef90a1";
export const url=new URL("../icons/oven-fill.svg?v=03c94f46336b5dc074d6cc710a047e0b95afbad3882897bac4733cfcea933908",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
