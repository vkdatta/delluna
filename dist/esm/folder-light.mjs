export const name="folder-light";
export const id="dl_8fec3c7e89a1430ca4cf";
export const url=new URL("../icons/folder-light.svg?v=23d87268013d0691a327812dccaeaad0e22db587e7f782e6ceada61de179dbb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
