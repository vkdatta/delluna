export const name="link-thin";
export const id="dl_fd622d0d456044df995b";
export const url=new URL("../icons/link-thin.svg?v=b4a49de4f1c07b68491d3438be4ea88f8e91773286f456279687ab83e2078b90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
