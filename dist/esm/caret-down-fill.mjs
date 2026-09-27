export const name="caret-down-fill";
export const id="dl_7fe8ded8ab014fe18c1b";
export const url=new URL("../icons/caret-down-fill.svg?v=d472cc800019ec28c8e7f630ac642e3309e132111390ce82c993fc92396ea3e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
