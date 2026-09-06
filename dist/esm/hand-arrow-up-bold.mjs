export const name="hand-arrow-up-bold";
export const id="dl_10a72ac7364441348800";
export const url=new URL("../icons/hand-arrow-up-bold.svg?v=3d6ee673a018384ddc855fa3da5fdd47fd554ac01837f09ed0cd66e760f92030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
