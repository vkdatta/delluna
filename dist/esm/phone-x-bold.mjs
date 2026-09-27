export const name="phone-x-bold";
export const id="dl_0cf1390099bc4c7fb0f3";
export const url=new URL("../icons/phone-x-bold.svg?v=b1ab50d1036316a8a4e462d08555292e21dbe40c2a072d2d26e94419829bf744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
