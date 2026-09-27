export const name="star-and-crescent-thin";
export const id="dl_71e9a09883c6ea563e7f";
export const url=new URL("../icons/star-and-crescent-thin.svg?v=2c5bb7b44418348cffaf4a7e9a163bc0a4895a8735ebed489041652447cecc85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
