export const name="power_off";
export const id="dl_1cf8abb281a243358c23";
export const url=new URL("../icons/P/power_off.svg?v=b3a369c7130ff27f5dee0e2cbb6b2493f476fc0212f3b595526d679e63ae939c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
