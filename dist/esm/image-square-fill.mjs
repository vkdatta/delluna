export const name="image-square-fill";
export const id="dl_74d585157b4b4853b06a";
export const url=new URL("../icons/image-square-fill.svg?v=916ac64dcf93f80094fbc5b1d178de5dba6473b2864a7910964cba4b0b7411e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
