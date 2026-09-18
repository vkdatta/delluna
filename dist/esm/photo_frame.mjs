export const name="photo_frame";
export const id="dl_b16a1e8e74c247798d88";
export const url=new URL("../icons/photo_frame.svg?v=8e671356a0d9035172e0592116f74b75fb2512a18a0451bb97b8f1160c7f7e18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
