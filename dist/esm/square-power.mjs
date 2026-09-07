export const name="square-power";
export const id="dl_e0e9f3c2255446c89e79";
export const url=new URL("../icons/square-power.svg?v=254862d5dca8c01b1246169f80d1ec0b4b472744979e6358bb7bd7a07bae5f16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
