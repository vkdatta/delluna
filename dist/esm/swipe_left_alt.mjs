export const name="swipe_left_alt";
export const id="dl_5e0a96faba3d484bb505";
export const url=new URL("../icons/S/swipe_left_alt.svg?v=3eb55be5d02411a816de63c4395a65ef2f36c29972cb9ded0e59a701b900dc2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
