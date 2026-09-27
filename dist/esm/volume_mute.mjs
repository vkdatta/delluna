export const name="volume_mute";
export const id="dl_6c8ec3f414a77d1c8338";
export const url=new URL("../icons/volume_mute.svg?v=e8390afee3dec72e70a587fbdd2816e1b0763e01bc98da313af2dd618fc3910a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
