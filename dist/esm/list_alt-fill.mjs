export const name="list_alt-fill";
export const id="dl_f83cb8f6c4f6483d9080";
export const url=new URL("../icons/L/list_alt-fill.svg?v=3b052ef49c80b88e4f9feb358ab10f9face0f2c27cf70aada56e8cbbb3674201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
