export const name="mask-happy-bold";
export const id="dl_8ce250383cb04684ae42";
export const url=new URL("../icons/mask-happy-bold.svg?v=cb487789da33f2113bb94fe73b66d9fc276fcfe1aee5bc5bf06beee633acad9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
