export const name="hls_off-fill";
export const id="dl_84f1ee4aa50c42ca96f0";
export const url=new URL("../icons/hls_off-fill.svg?v=e38edfc96fa14e7ab872b57c0738a93938b0f743c296d86da4e92cddcb24b9a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
