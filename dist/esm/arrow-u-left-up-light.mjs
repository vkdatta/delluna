export const name="arrow-u-left-up-light";
export const id="dl_08a4aab2ac4f41c5a56b";
export const url=new URL("../icons/arrow-u-left-up-light.svg?v=6d2928b5c6e0d27fac23df5ae072b1b2143315f18c93f44f10a046e1af776d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
