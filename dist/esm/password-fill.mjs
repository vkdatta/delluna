export const name="password-fill";
export const id="dl_5deaf1ea0d43484ba935";
export const url=new URL("../icons/password-fill.svg?v=f6bc2475fec45dd204cc671c219b287318aff3fc7cc89800bdbeee31ab6a10be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
