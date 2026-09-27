export const name="view_kanban";
export const id="dl_bf3d2b086decabd2f7b9";
export const url=new URL("../icons/view_kanban.svg?v=9d54b62463d71b7f2c0d1bef8bc93374507ecc5449199cd7b3683b414072b15a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
