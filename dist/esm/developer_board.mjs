export const name="developer_board";
export const id="dl_f2be0628587ea838ebc5";
export const url=new URL("../icons/developer_board.svg?v=c91a4b99ba14998dcab55c535bc0d3f91a9364747178d5b41f79afd2456293c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
