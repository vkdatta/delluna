export const name="handshake";
export const id="dl_77760761e7bb40c2b890";
export const url=new URL("../icons/handshake.svg?v=fccbbc3bf8ff7be3550998dfee100b091edbaa271af37d489d943cb7fbc2eea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
