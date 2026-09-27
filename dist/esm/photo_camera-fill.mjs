export const name="photo_camera-fill";
export const id="dl_1e69bbd4afccb36e1c3b";
export const url=new URL("../icons/photo_camera-fill.svg?v=190df9bcd25977e56b1e3112108f36787b2c002cd25d05faa47a12df6f6762f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
