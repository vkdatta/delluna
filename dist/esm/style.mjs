export const name="style";
export const id="dl_5dd9eabdd643a931c640";
export const url=new URL("../icons/style.svg?v=08b54c4ec4584de0ea528564da14e16461f8db0d723ed255f1df83b3f9b20633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
