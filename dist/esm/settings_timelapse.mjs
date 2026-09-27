export const name="settings_timelapse";
export const id="dl_d4806d380fa3810fef65";
export const url=new URL("../icons/settings_timelapse.svg?v=1527477d425f6a8d8664fb9d3f3a745483cbff01d44e301cc1d7cae088abd87a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
