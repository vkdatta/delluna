export const name="eyebrow";
export const id="dl_cc1759ed599f4c4ebf08";
export const url=new URL("../icons/eyebrow.svg?v=adb38e7b0cad66b9b7ae3b8d2889350d0f9390a9c204a3b64be93eb2aea80b49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
