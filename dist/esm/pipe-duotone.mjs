export const name="pipe-duotone";
export const id="dl_83c733cb37f1418585a9";
export const url=new URL("../icons/pipe-duotone.svg?v=b9a77170a21340569226662cac9bce8e76dd6cde49c9ec253e4abe18a7b0c28c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
