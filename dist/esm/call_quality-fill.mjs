export const name="call_quality-fill";
export const id="dl_5ec73a7ee7441357db8b";
export const url=new URL("../icons/call_quality-fill.svg?v=71adee7e23f716072e41b8481699ef092120340d993eb155d35f46a3d13b6b39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
