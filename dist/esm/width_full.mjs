export const name="width_full";
export const id="dl_c482570632061425f846";
export const url=new URL("../icons/width_full.svg?v=4a02eda4c1a4e9bf30336a2c0dbff667e0e7bccbb8f71b459044613ebfa4776b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
