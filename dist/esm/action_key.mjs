export const name="action_key";
export const id="dl_02c663cfff46a1846227";
export const url=new URL("../icons/action_key.svg?v=ef2db45f32b0bb38a616d22a495251d1e5104794d1ef13267ffe974c2136939d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
