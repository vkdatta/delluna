export const name="arrow-fat-lines-right-light";
export const id="dl_0760a790c34648599f74";
export const url=new URL("../icons/arrow-fat-lines-right-light.svg?v=456574b7808fd636371f0ae82606139acde454422aa8457b1355644d445e3f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
