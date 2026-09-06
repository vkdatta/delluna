export const name="metronome";
export const id="dl_7dcc7780398e4c208655";
export const url=new URL("../icons/metronome.svg?v=9fadb1c3dce0c2cbbdd8b371f69c94dd10163dcd1ebbed5dafee5d56b2b87478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
