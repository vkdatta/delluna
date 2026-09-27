export const name="call-fill";
export const id="dl_fc8026bf79f7411291be";
export const url=new URL("../icons/call-fill.svg?v=3ea7fdfd9ac97e8ea0205db9a12ba5de5e0685e98feb3056e53dae7c8405b807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
