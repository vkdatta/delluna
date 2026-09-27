export const name="gamepad_right-fill";
export const id="dl_0628e865936957405d8a";
export const url=new URL("../icons/gamepad_right-fill.svg?v=946e7269ea1164314613db56367870902e708bbcb1baf2e4130b23928d57e719",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
