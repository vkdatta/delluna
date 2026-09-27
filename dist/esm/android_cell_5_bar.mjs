export const name="android_cell_5_bar";
export const id="dl_f04fa82cd594c672b5e4";
export const url=new URL("../icons/android_cell_5_bar.svg?v=91564238dd2903205651cb2c86a7432db96495e2715d70ef44cc69b9c594942f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
