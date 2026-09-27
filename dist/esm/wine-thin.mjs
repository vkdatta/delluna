export const name="wine-thin";
export const id="dl_f2adb96cc96f09b1e2d8";
export const url=new URL("../icons/wine-thin.svg?v=90040760abab4bd001185d6a19667d5e46166a8458f0b6268f9bc2a32100ef60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
