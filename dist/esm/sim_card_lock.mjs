export const name="sim_card_lock";
export const id="dl_2f6031d6987b44e1b225";
export const url=new URL("../icons/S/sim_card_lock.svg?v=c99994467fcd27865ead917ef6b548ba07c9faec564070a582614a767de7078c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
