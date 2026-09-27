export const name="developer_board_off";
export const id="dl_e42425c071dca204a63e";
export const url=new URL("../icons/developer_board_off.svg?v=7f7c947d08f9d694f3889f47d0adabc7ced5f123f8b7b8bd285039e15cf65d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
