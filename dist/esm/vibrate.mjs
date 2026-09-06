export const name="vibrate";
export const id="dl_6119a54dc9a348099000";
export const url=new URL("../icons/vibrate.svg?v=3e6405ebc7f06a80c7802a1c7edac7e1e64c3a181b348a29220faea410c917e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
