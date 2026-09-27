export const name="business_center";
export const id="dl_f85a50e610da1df067ce";
export const url=new URL("../icons/business_center.svg?v=87554c0217febdfab4f8974df4a61441cba0f21236c42cdf73adf230a2a62766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
