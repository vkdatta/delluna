export const name="headset_mic-fill";
export const id="dl_0b1befe308f940d781f5";
export const url=new URL("../icons/headset_mic-fill.svg?v=5b594ae9aa79a68888f7899fd5ebb89a6d07444ab3873989e954e18889837194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
