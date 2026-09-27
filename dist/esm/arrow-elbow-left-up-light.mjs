export const name="arrow-elbow-left-up-light";
export const id="dl_47ac53e34df0497eb3fe";
export const url=new URL("../icons/arrow-elbow-left-up-light.svg?v=1e2d69865ef7c94786890bc49a84bded47255716254d8781b78096d5a3f3f626",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
