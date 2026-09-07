export const name="wallpaper";
export const id="dl_46d72a3e352943fe8753";
export const url=new URL("../icons/wallpaper.svg?v=cd028bb06d2386c7e348b1f0d8cec276ba4b730f4a32055dac9cbe5b8cf5d7c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
