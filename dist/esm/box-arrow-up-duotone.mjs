export const name="box-arrow-up-duotone";
export const id="dl_b04d2cf7153f45dab04d";
export const url=new URL("../icons/box-arrow-up-duotone.svg?v=bd9e9efa8dcf3157f2467222f9af678704e2f52fb1cb51c64821f561780da1ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
