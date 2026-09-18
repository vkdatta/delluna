export const name="house_with_shield-fill";
export const id="dl_bb6faabfb17141709550";
export const url=new URL("../icons/H/house_with_shield-fill.svg?v=cc626002ec464fc9a2baa30fd976a6547612eb2157001974bbfc531dc4f46478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
