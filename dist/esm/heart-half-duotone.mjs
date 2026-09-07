export const name="heart-half-duotone";
export const id="dl_b321d81119844a57a5a1";
export const url=new URL("../icons/heart-half-duotone.svg?v=4cbd9f0c22479d9b99234b8dfc1355922ee96979c26a148e19c48844bf334f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
