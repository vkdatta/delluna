export const name="add_column_left";
export const id="dl_ba7cd095c6819aa5a470";
export const url=new URL("../icons/add_column_left.svg?v=2634b7ceea168f41a854f7c79681522851aee881fd39364edbdbf6f5fa56e44f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
