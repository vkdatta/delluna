export const name="eye-closed-thin";
export const id="dl_f1d9fd7230524df189bf";
export const url=new URL("../icons/eye-closed-thin.svg?v=a508715833a8f3180a52cf7fcd5bc78cc3b3a48a294e434d2036ec3c38e7453f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
