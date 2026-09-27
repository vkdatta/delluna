export const name="arrow-circle-left-duotone";
export const id="dl_bf670fafe49b41d9ad25";
export const url=new URL("../icons/arrow-circle-left-duotone.svg?v=c5fb4ace957b70b2aafb3715c695157ffcfea6784c369a837b8d5bdcc293576a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
