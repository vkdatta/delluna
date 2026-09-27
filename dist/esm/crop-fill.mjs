export const name="crop-fill";
export const id="dl_6a7953cc450f46e8beb8";
export const url=new URL("../icons/crop-fill.svg?v=da8e33df2dbbfdf1cf05eb65a884d4e9b8b8fa190236e309816ced923032e7d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
