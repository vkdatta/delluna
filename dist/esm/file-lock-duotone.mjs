export const name="file-lock-duotone";
export const id="dl_7189ed5cea1c4d19a986";
export const url=new URL("../icons/file-lock-duotone.svg?v=2f9d7408066fb6a96888ca0d1c52e1447e0316a203f7897fadf10b30e4acfa31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
