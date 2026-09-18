export const name="offline_pin_off-fill";
export const id="dl_e78b41d3a1964448bbe7";
export const url=new URL("../icons/offline_pin_off-fill.svg?v=becf6368cd7f663a665ff44fc269cc4e8ec71f57cabd313deca760d3d25ead9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
