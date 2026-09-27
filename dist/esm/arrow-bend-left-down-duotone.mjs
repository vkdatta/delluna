export const name="arrow-bend-left-down-duotone";
export const id="dl_2f5e7bf4566442fcb794";
export const url=new URL("../icons/arrow-bend-left-down-duotone.svg?v=e5ed1a8169c740530f73bb1fb9c0f8d59bfdfa21183a70ba961aae5c8070c484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
