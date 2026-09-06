export const name="number-square-seven-bold";
export const id="dl_f63337f1b84945a39bc3";
export const url=new URL("../icons/number-square-seven-bold.svg?v=a992fcf8e40ff304cef94b5413d88d17123ad4768b6d8d49c9f79fbec656e43c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
