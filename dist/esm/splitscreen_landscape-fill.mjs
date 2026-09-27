export const name="splitscreen_landscape-fill";
export const id="dl_07ba95a223d9d7397428";
export const url=new URL("../icons/splitscreen_landscape-fill.svg?v=c8617eca11a682f681bc47699007019cae92feb72e84f4a650471b28f0adb079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
