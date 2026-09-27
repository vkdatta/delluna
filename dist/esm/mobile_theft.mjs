export const name="mobile_theft";
export const id="dl_9521c4a464e5e6792091";
export const url=new URL("../icons/mobile_theft.svg?v=f9511433d052186df28c335accd1f53ef8446487ed9ff3f8a221cbbb117cf260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
