export const name="settings_brightness-fill";
export const id="dl_a7be4775bd3641d89ce5";
export const url=new URL("../icons/settings_brightness-fill.svg?v=bc932bab07ca1f9645806ab1ee8cbe411075d604d2467ac66a75e283aadc152c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
