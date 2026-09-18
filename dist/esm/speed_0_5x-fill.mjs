export const name="speed_0_5x-fill";
export const id="dl_90f49ec206fe48009095";
export const url=new URL("../icons/S/speed_0_5x-fill.svg?v=f3c14d6f04bc919c049b2af234bf277aa7073e1f93e117115b5a598ff9d7de45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
