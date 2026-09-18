export const name="skull_list";
export const id="dl_c73f52753bac4cfda4c9";
export const url=new URL("../icons/S/skull_list.svg?v=48dea0962019845ae18c87204a14308bf2f731fc1c0c2608145f90f5aaaff59d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
