export const name="settings_cinematic_blur";
export const id="dl_6a17f9516b13d223de0f";
export const url=new URL("../icons/settings_cinematic_blur.svg?v=7467aabe55f954420822ff035fef654ba0de1b4364b99f6b591e44e162301368",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
