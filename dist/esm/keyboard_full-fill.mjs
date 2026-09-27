export const name="keyboard_full-fill";
export const id="dl_e25971c44164ad529c53";
export const url=new URL("../icons/keyboard_full-fill.svg?v=4be780fa168912e3a3a91b75faa7ad57b8beb12be5cb6368a935e06260c1838c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
