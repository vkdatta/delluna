export const name="translate-bold";
export const id="dl_9b1d2c9e449e32d7e819";
export const url=new URL("../icons/translate-bold.svg?v=42c18c884d51c982bf80618cfab64d3ab9c0ada62a2d53523ee256a29a934bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
