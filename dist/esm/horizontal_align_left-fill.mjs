export const name="horizontal_align_left-fill";
export const id="dl_f87cbbd495aebb5b8eef";
export const url=new URL("../icons/horizontal_align_left-fill.svg?v=f08e5cbf4030b8b7e834e0f36aceb7e6d9b769c287f725639899451a537fa10b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
