export const name="caret-double-right-duotone";
export const id="dl_05180ee2b3004019b0af";
export const url=new URL("../icons/caret-double-right-duotone.svg?v=8c77ee3d9f75e5c0b6d957042d6907504e711955177f3230eb60e1f63543068c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
