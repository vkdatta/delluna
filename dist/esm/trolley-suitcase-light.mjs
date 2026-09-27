export const name="trolley-suitcase-light";
export const id="dl_2d482a18795d2a907bb3";
export const url=new URL("../icons/trolley-suitcase-light.svg?v=927aad2c0859e71c0a8e78889c87c6316c5691d66b3772fe244c3d33d8a9fc44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
