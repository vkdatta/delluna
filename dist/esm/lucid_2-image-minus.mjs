export const name="lucid_2-image-minus";
export const id="dl_6b4d2389faec483cbaa2";
export const url=new URL("../icons/lucid_2-image-minus.svg?v=9460e88b8fb80c10fe5c65cc138eb9138b201791ce8236e641925dc8d7408bc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
