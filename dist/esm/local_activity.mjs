export const name="local_activity";
export const id="dl_3ae7a05b5b974fa49782";
export const url=new URL("../icons/local_activity.svg?v=ca38248a5b95f40ccf5cf7c0637b0b1d1248c35cb95d798f2af10d03bfb6a685",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
