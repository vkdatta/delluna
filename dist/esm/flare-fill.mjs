export const name="flare-fill";
export const id="dl_216fe3ff6a9d9f07c9f2";
export const url=new URL("../icons/flare-fill.svg?v=5867836ca1bcc2c314b62fc3b6fdcbc2d2c255a905a42fa4a99c495b96f142d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
