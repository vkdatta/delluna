export const name="circle-plus";
export const id="dl_040678f63e9f728669de";
export const url=new URL("../icons/circle-plus.svg?v=9785a202acf95f36c889ab309809eb21e650bbe6ab5a541fdb66787d69e7f45c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
