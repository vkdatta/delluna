export const name="hard-drive-fill";
export const id="dl_f4962c8899454dc7a69d";
export const url=new URL("../icons/hard-drive-fill.svg?v=abc664ffdb71ef2e18a0099b82ac2d0b0b4b4f3826d9859ded7ab500094a7d21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
