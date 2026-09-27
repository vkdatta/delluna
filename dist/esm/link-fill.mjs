export const name="link-fill";
export const id="dl_c117d09a7a424b6698b7";
export const url=new URL("../icons/link-fill.svg?v=59d732bf4f713baea060efb86d614cb3d860eed8f03e39ea59554deda2724dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
