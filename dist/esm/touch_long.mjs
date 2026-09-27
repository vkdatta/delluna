export const name="touch_long";
export const id="dl_e286784cae0f8110dad6";
export const url=new URL("../icons/touch_long.svg?v=94bf816adb3c49feb02ebce810d692ba62519464767a1252a8db0f5806039896",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
