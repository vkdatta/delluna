export const name="check-fat-duotone";
export const id="dl_e5d94e8554d64705ba87";
export const url=new URL("../icons/check-fat-duotone.svg?v=8325ea6f1909c4adc57a66591f80c00f22eee08dda915fd1c2b9edba1e3b8ccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
