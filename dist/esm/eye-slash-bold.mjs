export const name="eye-slash-bold";
export const id="dl_127afbde007a49a89d4b";
export const url=new URL("../icons/eye-slash-bold.svg?v=2c90457e608c86c1e880b897f2258eeea8ea7f60e7eaf61592b9674d7978647e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
