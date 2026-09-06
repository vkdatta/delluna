export const name="currency-ngn";
export const id="dl_c5a6ef2b44734d75bd9c";
export const url=new URL("../icons/currency-ngn.svg?v=575bff442fee43c671533a382cd01493e7c74673d92ace3c66e1805714fe08fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
