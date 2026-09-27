export const name="heart-bold";
export const id="dl_4f13095b31bc410bb984";
export const url=new URL("../icons/heart-bold.svg?v=a4ce1fdf3acfbfc56debf56af341a5ffe492e007c50cca19eb3bfcdb64814b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
