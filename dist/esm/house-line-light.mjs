export const name="house-line-light";
export const id="dl_6dd126b446e74098806e";
export const url=new URL("../icons/house-line-light.svg?v=d6cabb3c6e7f0be70b9932dd6e41a73e96ca77b96d94063df834a1c6c3364264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
