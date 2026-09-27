export const name="text-outdent-fill";
export const id="dl_e5ee83123fdb7f094a2b";
export const url=new URL("../icons/text-outdent-fill.svg?v=11df4b496f8157b78dc233ae5e87358f769f4e3e8b2a3bb92e546f90f45f170b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
