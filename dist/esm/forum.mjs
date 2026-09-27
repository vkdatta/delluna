export const name="forum";
export const id="dl_fcf65636fe900fc84759";
export const url=new URL("../icons/forum.svg?v=f037704c15e8fdc88b047ecf3f4588916be6bcfaba39ca40ffdc0bae1f39b9a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
