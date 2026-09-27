export const name="lucid_3-send-horizontal";
export const id="dl_a97cdcb1a94c43a49d33";
export const url=new URL("../icons/lucid_3-send-horizontal.svg?v=ca2eaa92dc7631d9923bd1543b407e6a1ec34059ccd79ec900bb3ba0e8fb423b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
