export const name="join_right-fill";
export const id="dl_a4a13b741a7e046b197b";
export const url=new URL("../icons/join_right-fill.svg?v=46b8e251bfa5b97204daebbfa832911ad31d340bd3c2b8b7e4e03d9c2dad467a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
