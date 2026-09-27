export const name="lucid_1-chevrons-left-right";
export const id="dl_b2fd1af1176e4b199c6b";
export const url=new URL("../icons/lucid_1-chevrons-left-right.svg?v=cfbf2a3c4637802c1386df98f465371e124fcc6ae8914b4fcd1a6d639757ae08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
