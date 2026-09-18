export const name="display_add-fill";
export const id="dl_adb7a4a4e074415da7f2";
export const url=new URL("../icons/display_add-fill.svg?v=c1488f2fa1649c151393f55ae5abe3760a6ff9438954414c425760a77a3a7e54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
