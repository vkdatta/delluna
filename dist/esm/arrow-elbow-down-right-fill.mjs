export const name="arrow-elbow-down-right-fill";
export const id="dl_80930e6146f4426480e8";
export const url=new URL("../icons/arrow-elbow-down-right-fill.svg?v=9d4f4f8798f284d26a39b68c884e19733378a495c2619d604857752083100120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
