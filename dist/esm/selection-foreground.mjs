export const name="selection-foreground";
export const id="dl_a5c0d21dce4b44f3953b";
export const url=new URL("../icons/S/selection-foreground.svg?v=af1c6e0db078df542da506d4866cb7105af22fd04b2f73fb7f558106924edc48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
