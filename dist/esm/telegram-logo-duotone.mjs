export const name="telegram-logo-duotone";
export const id="dl_a3f7b22a4a4f4ad79f7f";
export const url=new URL("../icons/T/telegram-logo-duotone.svg?v=82319c2c7af67b35f24583f44a30db2ac13d0283b69d64bbde7d753c58739ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
