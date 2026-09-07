export const name="device-tablet-speaker-bold";
export const id="dl_c4a83b2c9f2c4cc1bcc0";
export const url=new URL("../icons/device-tablet-speaker-bold.svg?v=97fd22690c91db6a55fca2b602bf0f249aea203bd0a7be1c54309190c7f5cbf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
