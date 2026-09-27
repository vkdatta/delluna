export const name="cloud-duotone";
export const id="dl_95ec4c3d9b1b49d7aa74";
export const url=new URL("../icons/cloud-duotone.svg?v=b6207dc10ef77d8e8a55453c36a05a065e2892499068ae77e3fa3bd5af53a4f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
