export const name="zoom_in-fill";
export const id="dl_80d99947271d1ab07e5d";
export const url=new URL("../icons/zoom_in-fill.svg?v=167698d2acdab2fdd82efb42ab72a55b4b29a96587ca13bcee19f200066339bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
