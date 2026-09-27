export const name="picture_in_picture_center";
export const id="dl_f7e2d9759a5b27ad48d2";
export const url=new URL("../icons/picture_in_picture_center.svg?v=d2d25ec213b6f4b82aa7a72b5434b2bf0e65fa7e5e34b43c0ad06445e1378301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
