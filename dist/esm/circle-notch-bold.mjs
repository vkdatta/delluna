export const name="circle-notch-bold";
export const id="dl_2e95edad079f42b5a2f1";
export const url=new URL("../icons/circle-notch-bold.svg?v=a469e7fe3511b1ed433e92e3c218833a19593890604a894ec5981655f328c21d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
