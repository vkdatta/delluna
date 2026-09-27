export const name="circle-plus";
export const id="dl_829002bcd32cb23544e3";
export const url=new URL("../icons/circle-plus.svg?v=8f14abd88f7625318e583215e6b7fd9e8fc3ce99c11f3ac484426771e5adc370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
