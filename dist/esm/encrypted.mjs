export const name="encrypted";
export const id="dl_f79be6f6ae07eea91725";
export const url=new URL("../icons/encrypted.svg?v=19b7f8e6970b2cf6188523b4cc6cb062437c39ba719a2365d11d856dd7982237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
