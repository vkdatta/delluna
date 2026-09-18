export const name="nest_cam_outdoor-fill";
export const id="dl_ebcabf0e830d4d1d8b2d";
export const url=new URL("../icons/nest_cam_outdoor-fill.svg?v=18362679026a1b5afdb465d81028f60ee378678ebeb066d905b0d9e9c10c69ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
