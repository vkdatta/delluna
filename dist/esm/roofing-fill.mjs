export const name="roofing-fill";
export const id="dl_d658f2c6d6ae0b3aa61d";
export const url=new URL("../icons/roofing-fill.svg?v=720caf755106ec98a1177e595b33684f392eef356c9600885c82e262261594df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
