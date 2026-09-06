export const name="device-mobile-camera-thin";
export const id="dl_98d72e38fa0d49428506";
export const url=new URL("../icons/device-mobile-camera-thin.svg?v=d09e083110acc4ca31ceb3afa1ecb61a83bbf3f00442a3e680bf91f64ba730f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
