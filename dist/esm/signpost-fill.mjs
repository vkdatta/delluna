export const name="signpost-fill";
export const id="dl_97cbd320c84b4864b04b";
export const url=new URL("../icons/S/signpost-fill.svg?v=b98433c23bb4e0828f77541fee623a05acd154a771e1fa1a08c2edaefefb697c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
