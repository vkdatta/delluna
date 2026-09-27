export const name="motion_photos_on";
export const id="dl_8d223491b7e14e6b5132";
export const url=new URL("../icons/motion_photos_on.svg?v=46d2c1e6f272e7a7e0955d039d1cd619c596772b8586ce3954a94c8137bbfb3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
