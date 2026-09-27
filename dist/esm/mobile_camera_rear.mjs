export const name="mobile_camera_rear";
export const id="dl_30c5784fcd496f7fb1e2";
export const url=new URL("../icons/mobile_camera_rear.svg?v=a98882d7682a33c7695366a14e143067e7f7a52efbd6587f355c5fe97e2da89f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
