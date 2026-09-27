export const name="arrow-fat-line-down-thin";
export const id="dl_f0ec3d00ca34484bb7f6";
export const url=new URL("../icons/arrow-fat-line-down-thin.svg?v=85378a41795470a466c49bc590b9377c2220f353f917d6397c2f646cf9c90fbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
