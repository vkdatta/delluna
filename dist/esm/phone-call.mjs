export const name="phone-call";
export const id="dl_b211bc0ec7ea49ed991e";
export const url=new URL("../icons/phone-call.svg?v=35e0113708f69bc0f6a9b33f5dc3b1a5da0700f373852be92acf51b37d7f5400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
