export const name="key-thin";
export const id="dl_b8d13e1271654d8a87df";
export const url=new URL("../icons/key-thin.svg?v=e39373b1e2dc875d64ad305275cc5d299b3ad51b8f419fffe444560bed907808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
