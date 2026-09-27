export const name="file_png-fill";
export const id="dl_1d32e9aa097123ebf0de";
export const url=new URL("../icons/file_png-fill.svg?v=b496edbba26ad7eb13456f418854b7e31cc8e32dca7a5895f5236f09ff39844d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
