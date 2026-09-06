export const name="medal-bold";
export const id="dl_b28418c0299d4e20b15c";
export const url=new URL("../icons/medal-bold.svg?v=55420d50414afbdcdf76608a7d19ae5dff4353a8133c5697971eb6c5712964b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
