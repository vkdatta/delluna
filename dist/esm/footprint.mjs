export const name="footprint";
export const id="dl_7762982787a83a00de21";
export const url=new URL("../icons/footprint.svg?v=83cdf6d978d34ce230d9c2b1afed75bebdffd0c1ae27346ad289da2f39a64386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
