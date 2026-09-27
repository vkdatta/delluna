export const name="gitlab-logo";
export const id="dl_96a0694f4a4247849d35";
export const url=new URL("../icons/gitlab-logo.svg?v=abf4bece9913815cd9339fde6f95668042cf50ac1375a53f6df0c57ae2fa6b04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
