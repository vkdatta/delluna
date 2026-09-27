export const name="back_to_tab-fill";
export const id="dl_8627d2e6a201fbc7728f";
export const url=new URL("../icons/back_to_tab-fill.svg?v=d81f2ceeaa95d0ab4a8fb9f06ed1f92ecf1aa6410dd1f32421379b93e6695e8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
