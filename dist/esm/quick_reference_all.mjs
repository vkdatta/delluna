export const name="quick_reference_all";
export const id="dl_754b9a19bf9f60188b14";
export const url=new URL("../icons/quick_reference_all.svg?v=0758e49214af058ab48081cbfda243be44eb91802005a2879b8273bfd00ff3c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
