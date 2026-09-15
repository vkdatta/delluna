export const name="font_download-fill";
export const id="dl_fbe69734ddc8406c8550";
export const url=new URL("../icons/F/font_download-fill.svg?v=e3afce3cdd82ed991a3f04c20494eafa24c6fda31761acdd1d20eccc94991dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
