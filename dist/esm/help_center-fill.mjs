export const name="help_center-fill";
export const id="dl_e388fcff3ead5dfec8f0";
export const url=new URL("../icons/help_center-fill.svg?v=6a449e8bb63ca198f8605cdaa9184f76419daed0471f98776c383acdb482393a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
