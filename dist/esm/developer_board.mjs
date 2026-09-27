export const name="developer_board";
export const id="dl_6646029a217d907a8ebe";
export const url=new URL("../icons/developer_board.svg?v=0f3feff5fe54d1dbb68f7a3ef02beb6c0566b70b16b92d58f228dbc5ca2509fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
