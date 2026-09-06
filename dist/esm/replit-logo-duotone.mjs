export const name="replit-logo-duotone";
export const id="dl_611e011dd1e64f9791fb";
export const url=new URL("../icons/replit-logo-duotone.svg?v=07562b850c106a171dc6225e54181db4ede7ed83fe90724111c6e4bbdb259ab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
