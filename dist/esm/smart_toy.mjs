export const name="smart_toy";
export const id="dl_6c84d7f2c113142150d9";
export const url=new URL("../icons/smart_toy.svg?v=a5a14756a175dbee16474f07a935421816bb79aec09fc2056346f2b187ffd6bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
