export const name="reset_focus-fill";
export const id="dl_6f6b34da3e864ae69579";
export const url=new URL("../icons/R/reset_focus-fill.svg?v=2f6a5550baf292590c654fa1688599295803b77c1f10d8a55ab7881840b0e515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
