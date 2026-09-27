export const name="web_traffic-fill";
export const id="dl_6f37f8fed3d1eb247279";
export const url=new URL("../icons/web_traffic-fill.svg?v=3a839485d57f031386138b0b748ad5e64e92780de1f802eec0dfd15d02a32a49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
