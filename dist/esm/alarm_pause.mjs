export const name="alarm_pause";
export const id="dl_cfd2c701fd32239f0612";
export const url=new URL("../icons/alarm_pause.svg?v=a05c1acab2bb6f471789d3db805429e88b5a5007f13f7b3dcccb440f368383c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
