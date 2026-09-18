export const name="nest_wifi_pro_2-fill";
export const id="dl_5d6bdac9ec3a4e2fb06e";
export const url=new URL("../icons/nest_wifi_pro_2-fill.svg?v=fd360cb5f71139206ae9900d93a7da8dcd1f2e96a4c0e6f45e2c3668d2ea3892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
