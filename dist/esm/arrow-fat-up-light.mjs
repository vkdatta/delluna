export const name="arrow-fat-up-light";
export const id="dl_19e1f28aa19649f6a52b";
export const url=new URL("../icons/arrow-fat-up-light.svg?v=7e190b8dcaaca85c6cf64f2e76cfb83d7239aa3a7bca85cfac089ef79d143b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
