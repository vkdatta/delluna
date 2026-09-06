export const name="align-right-fill";
export const id="dl_6f580abd1050446d84ff";
export const url=new URL("../icons/align-right-fill.svg?v=b4df51b16a075237101d5b743d29c8d46e64b0243dd2c7fec85263664dc5bfbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
