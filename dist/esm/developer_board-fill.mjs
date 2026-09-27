export const name="developer_board-fill";
export const id="dl_8472d7239c8a0482d4b1";
export const url=new URL("../icons/developer_board-fill.svg?v=438a34d84a2a52d7a3799a9eea57ae3de3fdec02d4fb4b5ad60b45f60159313d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
