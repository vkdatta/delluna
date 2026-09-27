export const name="disabled_visible-fill";
export const id="dl_e32d07077e5cc451f03d";
export const url=new URL("../icons/disabled_visible-fill.svg?v=1cf0bf6b7962b7698533573b4e9343ff290df1f3125ad5add9461cd3a15bdac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
