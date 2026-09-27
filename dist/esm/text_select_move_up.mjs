export const name="text_select_move_up";
export const id="dl_a3db61b6aac0827c83a3";
export const url=new URL("../icons/text_select_move_up.svg?v=ca20c2befb886f9c6694fceb1e828039fe187871a1635b21dec621b4b86458ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
