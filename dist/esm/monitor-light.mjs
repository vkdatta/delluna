export const name="monitor-light";
export const id="dl_82cbfd048df642efb3d4";
export const url=new URL("../icons/monitor-light.svg?v=02f1baf3256ad7924473b1b83ed1101b4c2fde3a969d7ceb58ecf1f17b0e3b3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
