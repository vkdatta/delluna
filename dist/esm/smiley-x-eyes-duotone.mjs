export const name="smiley-x-eyes-duotone";
export const id="dl_576a5ec95f0742458a87";
export const url=new URL("../icons/S/smiley-x-eyes-duotone.svg?v=f0f341f41526a7dcc063eecbb26d62395e78e18c69d1d9febcf01b41edb3187c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
