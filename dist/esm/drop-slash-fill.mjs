export const name="drop-slash-fill";
export const id="dl_34fe4c9bc1b843a2bd37";
export const url=new URL("../icons/drop-slash-fill.svg?v=7f2d38dcb51d90b3a50193501e286055109d7a58317794210da1190b236da0ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
