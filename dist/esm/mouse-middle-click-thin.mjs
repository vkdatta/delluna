export const name="mouse-middle-click-thin";
export const id="dl_1b33f41c7ede4604adcb";
export const url=new URL("../icons/mouse-middle-click-thin.svg?v=202b14d1978c8e8a6fe12bbcbda6a1f2d83182225aac51b8eeef01be00d4c6a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
