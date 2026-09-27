export const name="microsoft-outlook-logo";
export const id="dl_4c22625dccd1470d8446";
export const url=new URL("../icons/microsoft-outlook-logo.svg?v=a86705d00043a549010198f6c7450ecec4c23e47b188fadfe9f83b6119832806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
