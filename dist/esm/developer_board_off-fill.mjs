export const name="developer_board_off-fill";
export const id="dl_b1b23adb817104476c4c";
export const url=new URL("../icons/developer_board_off-fill.svg?v=0f261f7a4538a1a6f733112ddfa2afcefb9cb7d290f382c0ba10c8f7162ea24f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
