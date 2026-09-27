export const name="online_prediction-fill";
export const id="dl_4d6313af92287536b3cd";
export const url=new URL("../icons/online_prediction-fill.svg?v=1a9222bb2b01eae205591df32fda641db224661238f6a3eadeb47d26aec65e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
