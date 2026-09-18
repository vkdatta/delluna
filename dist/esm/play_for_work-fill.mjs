export const name="play_for_work-fill";
export const id="dl_ccb6c87117df42238d60";
export const url=new URL("../icons/play_for_work-fill.svg?v=170ce7b177f11afc919c5deb38d14107adac69f73526e48f33825e3050839aec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
