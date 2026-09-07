export const name="lucid_2-fish";
export const id="dl_df323d16eeb24015bb75";
export const url=new URL("../icons/lucid_2-fish.svg?v=59918630342e880f557c39882dad957b40d705ff90be01677af453eff10a8502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
