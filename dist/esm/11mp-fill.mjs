export const name="11mp-fill";
export const id="dl_4ed7554ea28c3e4d2554";
export const url=new URL("../icons/11mp-fill.svg?v=6cb53eddb0fd0e74bf51497f9b87be3e54e48cae8249f8d6e80741076fad0496",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
