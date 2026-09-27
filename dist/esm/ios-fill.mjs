export const name="ios-fill";
export const id="dl_0b006553192500326b6b";
export const url=new URL("../icons/ios-fill.svg?v=34cf7b0b2c06bffb1b9a364fb6d315450b27cded6beb7176a5d7b05f0a75c130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
