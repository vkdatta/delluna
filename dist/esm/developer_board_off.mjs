export const name="developer_board_off";
export const id="dl_991ead85ec6f25b15676";
export const url=new URL("../icons/developer_board_off.svg?v=889d24bf69c2dfc81d745c8e8744393f551e7a0cd20032044629ca1556f05853",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
