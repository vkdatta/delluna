export const name="call_merge-fill";
export const id="dl_5c6e9affdc0ea7d4e4b2";
export const url=new URL("../icons/call_merge-fill.svg?v=512e943b43134ff61202b0592a4896328d86411420ecea165424b73b303cd269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
