export const name="wechat-logo-duotone";
export const id="dl_2a83f6d7486a168404bd";
export const url=new URL("../icons/wechat-logo-duotone.svg?v=badf2b339e449d416ce31c2ba86c6347e49be4b422707f19ca61bda53fc25a0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
