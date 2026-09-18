export const name="mic_external_off-fill";
export const id="dl_b0061513a69246329a4c";
export const url=new URL("../icons/mic_external_off-fill.svg?v=506ca5ff89b5154247123e4356ef9cd3bbeceda0a3eb4a9bd9a162d94bccb385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
