export const name="shield_radar-fill";
export const id="dl_dd791ec4042f2d99c704";
export const url=new URL("../icons/shield_radar-fill.svg?v=538eef2c97d982877529f1b00b025f9bd9b06022cc6703069e811428c6fecc3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
