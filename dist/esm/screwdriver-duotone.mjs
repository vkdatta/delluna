export const name="screwdriver-duotone";
export const id="dl_907237dc4739f1076e92";
export const url=new URL("../icons/screwdriver-duotone.svg?v=5ce4427e69152c22f2c705798720d0ec61683e9e8697e08a5f87293d2d069436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
