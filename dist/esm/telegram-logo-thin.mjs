export const name="telegram-logo-thin";
export const id="dl_c816e92ab080c991aba1";
export const url=new URL("../icons/telegram-logo-thin.svg?v=0e5db9be1d5221dffaf03b982b824c481177d1d2c1ca5246d16612119dcdc40d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
