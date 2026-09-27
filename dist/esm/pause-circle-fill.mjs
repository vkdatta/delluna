export const name="pause-circle-fill";
export const id="dl_970eebf0ae554636a592";
export const url=new URL("../icons/pause-circle-fill.svg?v=96334c3788aa68597a5a4f74db25f1834ef278b0d9bb02512c48f72b7ad4f5b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
