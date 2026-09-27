export const name="lucid_1-briefcase";
export const id="dl_78519d027e814f6ca73b";
export const url=new URL("../icons/lucid_1-briefcase.svg?v=c3038aec1b02b1c97df1cecaa3cb52e897d3e300490b535c8acd589e4d403640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
