export const name="cookie-bold";
export const id="dl_1c6dd0f02ec240bd9664";
export const url=new URL("../icons/cookie-bold.svg?v=5d00ee93a0b081f2441027f757373927b8e8274c85f111e4b554c292cd609c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
