export const name="outbox_alt-fill";
export const id="dl_ed182f59a7c7a3e213f4";
export const url=new URL("../icons/outbox_alt-fill.svg?v=8b18f6e83c20da87fa4b4e0d6adb123fbd9090172713f02a60b6340a4e27fc71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
