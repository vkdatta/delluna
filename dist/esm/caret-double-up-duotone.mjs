export const name="caret-double-up-duotone";
export const id="dl_65d567bfc22f456996d4";
export const url=new URL("../icons/caret-double-up-duotone.svg?v=5956c4c073c1ed01d070534b1d34c3339e048adbae86330a95cacd23c906fe54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
