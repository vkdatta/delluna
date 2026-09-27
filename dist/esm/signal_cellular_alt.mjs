export const name="signal_cellular_alt";
export const id="dl_04e0e61430a00d44cffb";
export const url=new URL("../icons/signal_cellular_alt.svg?v=61ebafc54a856068689750df7f9aa0273d8d1a932acc28fd546ee3b56b4257b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
