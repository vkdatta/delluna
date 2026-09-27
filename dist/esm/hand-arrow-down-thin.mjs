export const name="hand-arrow-down-thin";
export const id="dl_21d24ac5777343469c1d";
export const url=new URL("../icons/hand-arrow-down-thin.svg?v=bd110bca226760cb262f215ff8361a2770b3a594eca60541969926486318a00e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
