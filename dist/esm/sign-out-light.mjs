export const name="sign-out-light";
export const id="dl_0d2e676319af48e9af24";
export const url=new URL("../icons/S/sign-out-light.svg?v=df41aa98d3397c2081d40cf50301d881a790dd6d8072479d64310618e73c2f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
