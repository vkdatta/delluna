export const name="eraser-bold";
export const id="dl_77d2ddb5469741d89de3";
export const url=new URL("../icons/eraser-bold.svg?v=f0b1eeb562b8cbabf399aad9667fef7f18b2ea9b8cf778c76d8d499b1ca7d052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
