export const name="hand-withdraw-thin";
export const id="dl_70def84dea0f451eb4f7";
export const url=new URL("../icons/hand-withdraw-thin.svg?v=af5aa6b491c91f4d619b7a6e85da60c1dda7ea5d2340c853d6b9e005e02f2d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
