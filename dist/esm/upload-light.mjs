export const name="upload-light";
export const id="dl_d1f5044a554fc2bada63";
export const url=new URL("../icons/upload-light.svg?v=fbcd1adc0332953ef7bfa259f6f33af9d13bb498a397a153cb4e0affce0ae134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
