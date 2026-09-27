export const name="developer_board_off";
export const id="dl_7fa05fe643c4d0f9ebe0";
export const url=new URL("../icons/developer_board_off.svg?v=fd69c159fee0e8eecf7dc356534e788bed930881d3f70c1ecd631da09abb1276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
