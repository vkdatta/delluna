export const name="roundabout_right-fill";
export const id="dl_04e91c45999540c7940c";
export const url=new URL("../icons/roundabout_right-fill.svg?v=c63c41ab0074c47782ccd35a67bd0f80d560543ec3013eab9c45bfbc9218396f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
