export const name="pen-nib-straight-fill";
export const id="dl_3b8ba24c1021414f967c";
export const url=new URL("../icons/pen-nib-straight-fill.svg?v=2bce549b0f1c5525d67a66dec16732535513ddb37877be09428907be8f1eb0b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
