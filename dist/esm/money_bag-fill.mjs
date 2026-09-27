export const name="money_bag-fill";
export const id="dl_cc25215bc725af5d6dd5";
export const url=new URL("../icons/money_bag-fill.svg?v=a74686f3bbbae2683101b204e5a8ae06aa770bd9e248c8f0b87b624d7b7a9370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
