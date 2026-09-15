export const name="developer_board_off-fill";
export const id="dl_d91742ad37b544bfaf53";
export const url=new URL("../icons/D/developer_board_off-fill.svg?v=a735226115e6ef0fd7ce84ccac4446ab2608974e9de80717a178f68b1a48b6fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
