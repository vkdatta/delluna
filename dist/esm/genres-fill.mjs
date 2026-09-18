export const name="genres-fill";
export const id="dl_ed2c3cb62b0d4ccdbb0e";
export const url=new URL("../icons/G/genres-fill.svg?v=544f34bfcc8ff818e3e084a38da025274038a47c84575ec8e9f3fff144079731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
