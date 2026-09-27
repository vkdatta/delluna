export const name="file-arrow-down-bold";
export const id="dl_b4858aa89c834ce99e3a";
export const url=new URL("../icons/file-arrow-down-bold.svg?v=d8f11e7512209e25d93be60aa3c3381329e825e3aebd8b7ccd06b1494c10b0b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
