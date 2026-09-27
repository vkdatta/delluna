export const name="wallpaper";
export const id="dl_46d72a3e352943fe8753";
export const url=new URL("../icons/wallpaper.svg?v=f2965d7a7e76f9954e5398285a46f0684a8b4e9029e172e598f6ac128b1bcad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
