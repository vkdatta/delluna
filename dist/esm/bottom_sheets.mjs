export const name="bottom_sheets";
export const id="dl_611c3d3dd5c54d6181e4";
export const url=new URL("../icons/B/bottom_sheets.svg?v=5e8b651290fba4423261e2a74f4adcabe29ea7c6758ad8325e46e4d57f251a67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
