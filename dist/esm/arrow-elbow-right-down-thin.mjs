export const name="arrow-elbow-right-down-thin";
export const id="dl_c6f0ed3cbf2d4c1cba71";
export const url=new URL("../icons/arrow-elbow-right-down-thin.svg?v=45eada15aa7fa9b9783a2fdbd059b844c9a5674c3197ae31b8bbd8fa37306b30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
