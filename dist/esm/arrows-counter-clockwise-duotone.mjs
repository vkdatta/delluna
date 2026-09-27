export const name="arrows-counter-clockwise-duotone";
export const id="dl_aef525055b994ca88e46";
export const url=new URL("../icons/arrows-counter-clockwise-duotone.svg?v=69d828796d74fdf1028f872ff980e45b73a9a64336cd0fa4bc003fe8d1f5bef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
