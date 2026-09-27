export const name="nest_cam_iq-fill";
export const id="dl_a2c95c75071d77f6c437";
export const url=new URL("../icons/nest_cam_iq-fill.svg?v=fc2a5e804145d4d302ce7eccf0827e755cb04bfa6d77a9fb23207e8695e3ae43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
