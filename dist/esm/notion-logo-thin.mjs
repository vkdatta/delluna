export const name="notion-logo-thin";
export const id="dl_89fe07272b2e4a839f72";
export const url=new URL("../icons/notion-logo-thin.svg?v=7ab116a67a7d1204f30b9ae0e250c5ab9a103fc012616e60044fe7159d7f0abe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
