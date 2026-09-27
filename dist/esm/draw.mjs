export const name="draw";
export const id="dl_c62990377da3756312ea";
export const url=new URL("../icons/draw.svg?v=638094d15b77918e272e1076ce1a7fc443d26feb22f8290f4108679d089e8214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
