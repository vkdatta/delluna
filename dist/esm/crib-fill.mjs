export const name="crib-fill";
export const id="dl_3092b2f5e4a1b85cfbba";
export const url=new URL("../icons/crib-fill.svg?v=c3543c461927e0b268ba51ddeb88c153be07cd71748b992093f845f76afdde60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
