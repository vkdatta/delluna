export const name="edit_arrow_down-fill";
export const id="dl_8efc4c3f1a2919d6ee80";
export const url=new URL("../icons/edit_arrow_down-fill.svg?v=cb4688f1e76a6366541a751a775424446b8c6e455002f7a73156f01269d6a815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
