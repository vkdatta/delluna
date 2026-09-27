export const name="number-square-seven-duotone";
export const id="dl_e34acca79e9e4b81aac4";
export const url=new URL("../icons/number-square-seven-duotone.svg?v=e4b8ab3a8a8ce4b1da6bde4d8106095f4f73e2e1c15993ba84f3e7b0f3c27719",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
