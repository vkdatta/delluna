export const name="certificate";
export const id="dl_eb961a9dfa1b4ff09e17";
export const url=new URL("../icons/certificate.svg?v=b6d9d500db63945a7b729f8617f9e0b14a32ad57c967c771207f9e475ed0c9cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
