export const name="developer_board_off-fill";
export const id="dl_d937962e86f3a8344495";
export const url=new URL("../icons/developer_board_off-fill.svg?v=046fb96896e8da7929e04e45ceaa4a498f383d28912453f07ea93472826c6cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
