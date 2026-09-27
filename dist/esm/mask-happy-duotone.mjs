export const name="mask-happy-duotone";
export const id="dl_dda28ee9d72a4b8a99db";
export const url=new URL("../icons/mask-happy-duotone.svg?v=b3dd2ae93d50b53e6ab36b922acaa7c4d97928e06d157b54513dd7bd61231852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
