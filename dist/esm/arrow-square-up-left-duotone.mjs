export const name="arrow-square-up-left-duotone";
export const id="dl_387c608efbfd4d7b8358";
export const url=new URL("../icons/arrow-square-up-left-duotone.svg?v=6c00f160f3f69130c6fd8efcba5062da54ab214d05c220416d94f6685f107ccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
