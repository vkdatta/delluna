export const name="wave-square-thin";
export const id="dl_1ab6f6e3f0d5e3bf0229";
export const url=new URL("../icons/wave-square-thin.svg?v=4afb059237dee69d1705844aadff38e5e04f859a2cabfe801ef761b817f393ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
