export const name="drop-simple-duotone";
export const id="dl_b5f5867d47d24be382c6";
export const url=new URL("../icons/drop-simple-duotone.svg?v=1060ad48125e59eb88bc6a5f76410964a2c46825dd393ae0bf6fb571b70c8f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
