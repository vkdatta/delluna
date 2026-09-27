export const name="text-h-two-duotone";
export const id="dl_ed06d22f7b1f5ccc276a";
export const url=new URL("../icons/text-h-two-duotone.svg?v=1bc2aa141939d5f22766915769505dd739704979a64028e9af56f589d1051ec1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
