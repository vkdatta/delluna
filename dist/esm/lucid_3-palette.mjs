export const name="lucid_3-palette";
export const id="dl_a482b06081964538af4d";
export const url=new URL("../icons/lucid_3-palette.svg?v=fa666f1bb9993a0a5b0377687d8fb111436b3622d74b101262fe5894359ec0be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
