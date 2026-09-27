export const name="cloud-rain-duotone";
export const id="dl_79b2e9a54171487bbe4a";
export const url=new URL("../icons/cloud-rain-duotone.svg?v=38dd2b1c3095bbae0f359ef31b86f2d52643c18c5cabc5d4554cc1dfc9e65822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
