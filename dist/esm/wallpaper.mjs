export const name="wallpaper";
export const id="dl_46d72a3e352943fe8753";
export const url=new URL("../icons/wallpaper.svg?v=a34daf7dc555702ead530a1ccd7e987d052995f5fc80c5cfae51b37e69bc1860",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
