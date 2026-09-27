export const name="caret-up-down-thin";
export const id="dl_ad9b635f634841459df4";
export const url=new URL("../icons/caret-up-down-thin.svg?v=5816d666edada94d5a65a2c99dfd2259581e1b41345e85baad90c8bccdea7b5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
