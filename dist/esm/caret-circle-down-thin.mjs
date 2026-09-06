export const name="caret-circle-down-thin";
export const id="dl_599b3186471f4192aba0";
export const url=new URL("../icons/caret-circle-down-thin.svg?v=c8b4a5836856da2d70e163b68d4e32b2fcd3d85e6ce57d115cab649bdb1ec0d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
