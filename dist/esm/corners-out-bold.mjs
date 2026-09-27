export const name="corners-out-bold";
export const id="dl_ad21b3ce2b8b470aa543";
export const url=new URL("../icons/corners-out-bold.svg?v=e9c814f788ab8cd3bc52c512580b71d23a5fa5b8873e3acec0f4e508d1015f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
