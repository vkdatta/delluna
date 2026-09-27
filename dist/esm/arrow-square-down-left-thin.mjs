export const name="arrow-square-down-left-thin";
export const id="dl_088675a7acd64dd984a7";
export const url=new URL("../icons/arrow-square-down-left-thin.svg?v=b16b7952ae051039ba49eeebe2869b2671ee543c419bdf54b153f96db62bc2b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
