export const name="caret-down-bold";
export const id="dl_497dd877f90d4461b8df";
export const url=new URL("../icons/caret-down-bold.svg?v=632849452eba9ac04708b30b487ec00fa076054afe08ceb3c68109457b6d027f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
