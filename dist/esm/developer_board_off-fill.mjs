export const name="developer_board_off-fill";
export const id="dl_9c014f55c40191b2a43f";
export const url=new URL("../icons/developer_board_off-fill.svg?v=0829a43d1273544957d872d6f1532222d9d835c288a0171b100987edd0e1939e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
