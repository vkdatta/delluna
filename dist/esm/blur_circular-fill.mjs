export const name="blur_circular-fill";
export const id="dl_fd625b29831e49f5b3fa";
export const url=new URL("../icons/blur_circular-fill.svg?v=74ab2e0abc62fbb1c604513efdb9e753fcc6f6042ab6031c6b176d2fe03b551a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
