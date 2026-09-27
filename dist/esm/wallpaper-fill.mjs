export const name="wallpaper-fill";
export const id="dl_30d168442d01f4adfef5";
export const url=new URL("../icons/wallpaper-fill.svg?v=6df76feac71f28f9d51341587e9cd51226b64bb29681afecbde906bc3a1dd605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
