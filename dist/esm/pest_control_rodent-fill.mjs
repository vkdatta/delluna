export const name="pest_control_rodent-fill";
export const id="dl_c0543baa2088caf0809e";
export const url=new URL("../icons/pest_control_rodent-fill.svg?v=d2b309f32479b43eaf915a78befa49a3ad10788f078a0110bc4638c89d2ccb9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
