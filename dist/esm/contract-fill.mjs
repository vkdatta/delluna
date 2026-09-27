export const name="contract-fill";
export const id="dl_acc05fcc90ffe0120032";
export const url=new URL("../icons/contract-fill.svg?v=b6925211c093046df21d2dc5ebcf3037331ad490dc360dd755ba8746de03f05c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
