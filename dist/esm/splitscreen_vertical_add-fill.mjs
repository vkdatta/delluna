export const name="splitscreen_vertical_add-fill";
export const id="dl_59651b2e50e9f5897f3d";
export const url=new URL("../icons/splitscreen_vertical_add-fill.svg?v=c02e94c1bb31c3c39dde2bec3d4497b11d5409e280a9128ce63a357f8b2594ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
