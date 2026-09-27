export const name="smiley-sticker-duotone";
export const id="dl_d967884b80a4d5f179e6";
export const url=new URL("../icons/smiley-sticker-duotone.svg?v=55fae8af174d7de2420eb7d538f66ac7b4568a9ef634873b47d3da393c962868",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
