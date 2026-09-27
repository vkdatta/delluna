export const name="nightlight-fill";
export const id="dl_9b5bb3f5159994323db0";
export const url=new URL("../icons/nightlight-fill.svg?v=c944eddddfddef0cc5847a7653b2fed7215389f3dbe1e42d6f419b0a697e2e1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
