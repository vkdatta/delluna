export const name="screen_share";
export const id="dl_eedf8979a62bd7c75a1e";
export const url=new URL("../icons/screen_share.svg?v=4bcdd9e7508da0a01ce4a41676a19792c13d7c49a223b21f8013591ed75ac551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
