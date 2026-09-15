export const name="developer_board_off";
export const id="dl_0b78f06c10074c44be41";
export const url=new URL("../icons/D/developer_board_off.svg?v=877a63f248597e579390fa019dd5567a5b62b837885b18caf3c79e245e3d2dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
