export const name="notion-logo-duotone";
export const id="dl_62575c73e16d4836938a";
export const url=new URL("../icons/notion-logo-duotone.svg?v=844781dc243ac1a991bf8c2c66ded2c39557ddcf2bf48938ccca06cf32bc387c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
