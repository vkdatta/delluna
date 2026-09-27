export const name="settings_timelapse-fill";
export const id="dl_60e5c3631d52f3f60254";
export const url=new URL("../icons/settings_timelapse-fill.svg?v=4f00301668395fd0fd0a8edef9864546294dcf79868b8f7819cb86deb9bd7bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
