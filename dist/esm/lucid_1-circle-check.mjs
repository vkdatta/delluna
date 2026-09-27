export const name="lucid_1-circle-check";
export const id="dl_2b215fc0f3404fa09fd5";
export const url=new URL("../icons/lucid_1-circle-check.svg?v=7968bc7b293dc50a327830a4720a15f33657bd43c2f34268336fcc1c7054950d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
