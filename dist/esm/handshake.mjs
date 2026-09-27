export const name="handshake";
export const id="dl_77760761e7bb40c2b890";
export const url=new URL("../icons/handshake.svg?v=866878b8d116278cc7b0283f1bd4ebe84b8ee668cbca2385a939f2451618b911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
