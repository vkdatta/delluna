export const name="psychology_alt-fill";
export const id="dl_2e0388ceceaa5d4ec9d5";
export const url=new URL("../icons/psychology_alt-fill.svg?v=0cbb4ea44cee54014de60979b03c324fe2c9e6ffe2a80f9d4be0469d84c6408b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
