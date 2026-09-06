export const name="play-pause-thin";
export const id="dl_ad657dde3a47460f8603";
export const url=new URL("../icons/play-pause-thin.svg?v=4da97e150d4a7dcc591c0fa163390c0b87fe65ae3ab9c1f399e9d00440f6037a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
