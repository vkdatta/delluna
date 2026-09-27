export const name="swap_driving_apps_wheel-fill";
export const id="dl_b2126bc9a4672c740edd";
export const url=new URL("../icons/swap_driving_apps_wheel-fill.svg?v=f8b8a5f785af342bfb1379dee3d910ea9cb4a30f579314fb3703bb36e5f7c68c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
