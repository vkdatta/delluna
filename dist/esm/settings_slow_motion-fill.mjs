export const name="settings_slow_motion-fill";
export const id="dl_abbd5dff0b8919ea3f45";
export const url=new URL("../icons/settings_slow_motion-fill.svg?v=d4ffeebd9a7ab091e2f3d011f7e751258430e056e6033472b2114c75675f6922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
