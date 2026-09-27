export const name="data_thresholding";
export const id="dl_4f94bff1d9db31cc1ebe";
export const url=new URL("../icons/data_thresholding.svg?v=4994164b9a72b1089e804dda451dc02bb811a4adb1a9029bf21951accab75f2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
