export const name="hearing_disabled-fill";
export const id="dl_f7babad1c0ed88f68c77";
export const url=new URL("../icons/hearing_disabled-fill.svg?v=f090d991dab89b3ac2fb05d363e4a15f60554348c548f3f4d1a28a9fa6d31336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
