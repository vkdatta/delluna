export const name="wallpaper";
export const id="dl_46d72a3e352943fe8753";
export const url=new URL("../icons/wallpaper.svg?v=4079ddd8a387c53859c9337c1164c15491e2d3758b8ccca2706051a9de459738",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
