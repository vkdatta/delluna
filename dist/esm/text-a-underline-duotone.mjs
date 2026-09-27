export const name="text-a-underline-duotone";
export const id="dl_dd60943308e2722c5328";
export const url=new URL("../icons/text-a-underline-duotone.svg?v=351298a7ab4fa04ce80eb98b7a1dfc3a16c7a0ad868c4558909c51e760847ae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
