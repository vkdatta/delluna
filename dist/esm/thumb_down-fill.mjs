export const name="thumb_down-fill";
export const id="dl_9fb7aa8112bd4636ae4d";
export const url=new URL("../icons/T/thumb_down-fill.svg?v=22347d498a1141fe0e13efb761112093e88925363ec2826090311be6f4c414ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
