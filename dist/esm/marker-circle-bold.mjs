export const name="marker-circle-bold";
export const id="dl_74b47458dd6f43a590f0";
export const url=new URL("../icons/marker-circle-bold.svg?v=faca8867eeef81248f4944118f79372475c43a3d427c042ffaf885672f9e4fc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
