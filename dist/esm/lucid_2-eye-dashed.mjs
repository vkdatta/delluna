export const name="lucid_2-eye-dashed";
export const id="dl_d92020db37c844a285a5";
export const url=new URL("../icons/lucid_2-eye-dashed.svg?v=a1365817dcfb2ea599e505eba5e4258bd2254aa90dd0c28f2f067b065672c9ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
