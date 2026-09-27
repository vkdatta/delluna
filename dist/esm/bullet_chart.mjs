export const name="bullet_chart";
export const id="dl_532a11fdc98b8a91994e";
export const url=new URL("../icons/bullet_chart.svg?v=4993c30f8fc0816786f8a65a394618ab24c9958e124a7787df8ffcaca68318df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
