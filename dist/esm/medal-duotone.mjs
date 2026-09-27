export const name="medal-duotone";
export const id="dl_464ca69a2b7e47fbab81";
export const url=new URL("../icons/medal-duotone.svg?v=a26db5083cfe84e8133ab1901ce4a1751ed4c14f54c01479e10e12afbbb90606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
