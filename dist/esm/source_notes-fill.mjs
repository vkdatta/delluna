export const name="source_notes-fill";
export const id="dl_b62e8dc500b4424a9e49";
export const url=new URL("../icons/S/source_notes-fill.svg?v=eebfb29ac05fd183d4d799a3eb59e0a447ee7620e35b7724f6a57148024a3fa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
