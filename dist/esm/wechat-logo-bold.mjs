export const name="wechat-logo-bold";
export const id="dl_3364ca168bf0d16e79cb";
export const url=new URL("../icons/wechat-logo-bold.svg?v=d04cbdc1c78a2a160114d602ee09871f6d737e27d096d0a48212596b1003addc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
