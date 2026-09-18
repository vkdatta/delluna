export const name="blur_linear";
export const id="dl_7bd82b8f99b44ed996b5";
export const url=new URL("../icons/blur_linear.svg?v=ba99623f59bf2a258f22c1ea6941ee8c45876eb7cde2efb53796cfa427edd773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
