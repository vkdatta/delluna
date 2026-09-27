export const name="lucid_3-shield-x";
export const id="dl_4fd11011972f46ca9928";
export const url=new URL("../icons/lucid_3-shield-x.svg?v=e20abb81e1c502a398f0eec1d1247e7f1a44b357c8f7083d897418d1eecd19e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
