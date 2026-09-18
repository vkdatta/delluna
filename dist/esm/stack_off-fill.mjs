export const name="stack_off-fill";
export const id="dl_7d4c51aef9cc44bab698";
export const url=new URL("../icons/stack_off-fill.svg?v=3e2bbe68f94cdd0f84064696a8aa7bce970951f7f68ebeb8afe47633c95e62b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
