export const name="arrow-u-down-left-duotone";
export const id="dl_6710836af46342c783b2";
export const url=new URL("../icons/arrow-u-down-left-duotone.svg?v=b76ce6b55ccc6613fc3adb886ff741769e67e6fbab2a11e61c7ccc7fb8d9ba3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
