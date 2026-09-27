export const name="departure_board-fill";
export const id="dl_4cd3f140c4b8124a8985";
export const url=new URL("../icons/departure_board-fill.svg?v=c713686b3c696a998fe7c6d32ea3b962a439c95082925573d858152135bf32bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
