export const name="all_match-fill";
export const id="dl_62060a95efd308af4948";
export const url=new URL("../icons/all_match-fill.svg?v=fc824e3260a2b516b1c31319ccf995895ac8c99a07ed3ac55168b41895f59c41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
