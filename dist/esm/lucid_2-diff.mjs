export const name="lucid_2-diff";
export const id="dl_84b8a3c90e4d485eb9fc";
export const url=new URL("../icons/lucid_2-diff.svg?v=f7928832b582692065f7371387011db29c71e68414fa7b4e724a7d70c7c3892e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
