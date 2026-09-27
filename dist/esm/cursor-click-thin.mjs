export const name="cursor-click-thin";
export const id="dl_7f0081dbf81049598671";
export const url=new URL("../icons/cursor-click-thin.svg?v=ddcd96e358594b04f54b0290445c4a7900bd875708209190fa2459c08ad44fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
