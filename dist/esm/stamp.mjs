export const name="stamp";
export const id="dl_0ccdf4ce1208473a90b4";
export const url=new URL("../icons/stamp.svg?v=01bb4744540dd3e275cb5faacc14eded91d6ae6767ab8db3db45459fdfe2bb1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
