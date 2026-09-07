export const name="snapchat-logo";
export const id="dl_4c673b8f41e64d7ba238";
export const url=new URL("../icons/S/snapchat-logo.svg?v=32d081802e0170f97eb28c1bafbeccdbe2c6953fc64f9d6d95e6d521312cdf95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
