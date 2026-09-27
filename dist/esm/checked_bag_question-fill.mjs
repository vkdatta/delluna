export const name="checked_bag_question-fill";
export const id="dl_636d7ab49710ff542b58";
export const url=new URL("../icons/checked_bag_question-fill.svg?v=86ed6b836c06f6dbe5316edaf0e5be72c4c72eef8ee0c30482ba581d5e1e00cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
