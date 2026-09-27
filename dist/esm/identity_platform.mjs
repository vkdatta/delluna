export const name="identity_platform";
export const id="dl_61440eef14516fd0e548";
export const url=new URL("../icons/identity_platform.svg?v=a87b8b8ac7a740819ab3f9111d1aee4a5a322906e0918008378ef3d020d3aed8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
