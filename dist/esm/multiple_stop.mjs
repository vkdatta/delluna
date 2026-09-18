export const name="multiple_stop";
export const id="dl_56d54a54c15340d794b1";
export const url=new URL("../icons/multiple_stop.svg?v=ec0a6d13b4d7e7f27ddd81afaa49139792986f59640543330f0fd54018e4c99c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
