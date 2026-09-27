export const name="pix-logo-thin";
export const id="dl_90e1b7a018cc4c61a7f8";
export const url=new URL("../icons/pix-logo-thin.svg?v=6099d2019def77d6b8db237f6acbf496fba23f8037cd0d4b809cfeb94f1f6952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
