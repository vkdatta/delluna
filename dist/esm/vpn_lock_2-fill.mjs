export const name="vpn_lock_2-fill";
export const id="dl_38e721c612b783d93591";
export const url=new URL("../icons/vpn_lock_2-fill.svg?v=c02ee2baa72de737312791ef73bc1bb3509023b9423312dd086a6c5be1caf649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
