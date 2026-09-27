export const name="folder-simple";
export const id="dl_a1ff8273c3eb493f9b42";
export const url=new URL("../icons/folder-simple.svg?v=5ed1dc35d4fed559d89d25562b734cfbce5bccf79f737e0d54ee173f2bcc02f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
