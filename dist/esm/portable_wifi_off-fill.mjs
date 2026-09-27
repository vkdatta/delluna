export const name="portable_wifi_off-fill";
export const id="dl_95d03ff0d3fa9ab9b18f";
export const url=new URL("../icons/portable_wifi_off-fill.svg?v=ab7499be3c84308ae519ab7051d45936d89def628a980724cba3ac14d6a2a07c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
