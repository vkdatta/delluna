export const name="settings_accessibility-fill";
export const id="dl_9cbfc423e1894e9ebdd2";
export const url=new URL("../icons/S/settings_accessibility-fill.svg?v=c1ca46cbca5092ba45fb94c630fcdcbec8b87805550a4ed5e8b3e2c3d7424d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
