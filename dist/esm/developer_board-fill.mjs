export const name="developer_board-fill";
export const id="dl_e19c253be5c84bbcb05d";
export const url=new URL("../icons/D/developer_board-fill.svg?v=d1d6abed64c8c71ce3a818fcbe67d6b5c12cadd6fe502a8d7daab6313e179db8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
