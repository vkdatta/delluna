export const name="lucid_2-corner-left-up";
export const id="dl_266799d06628438ab3d4";
export const url=new URL("../icons/lucid_2-corner-left-up.svg?v=6efafb328beb630c26a5645ef194e4492f9250bb754295467b202daf0929726a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
