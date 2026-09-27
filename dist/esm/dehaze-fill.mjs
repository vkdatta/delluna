export const name="dehaze-fill";
export const id="dl_702e830dea0dfd6d516f";
export const url=new URL("../icons/dehaze-fill.svg?v=69e9b7f13c577f7acf457a0f2bb0f19e3c50b55905126513569ec39f4c14c49e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
