export const name="arrow-fat-left-light";
export const id="dl_3a64aadf0fcc41619815";
export const url=new URL("../icons/arrow-fat-left-light.svg?v=cf22b1b0f89d7feef8123b34502a9f7da55e42d407211868de902d9083c9f94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
