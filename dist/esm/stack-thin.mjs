export const name="stack-thin";
export const id="dl_20ffc234954943665377";
export const url=new URL("../icons/stack-thin.svg?v=86daedefacdaf6c9b625a318c9286547cecaea1c3665cbca4f07446bd351b881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
