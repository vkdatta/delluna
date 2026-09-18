export const name="devices_other";
export const id="dl_fb1d999ae67a41e0b2e2";
export const url=new URL("../icons/devices_other.svg?v=b118f48c10d189e02319f9da72dab19dfc24d9252796f632ef6d6fe892b2fb00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
