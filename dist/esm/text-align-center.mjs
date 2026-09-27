export const name="text-align-center";
export const id="dl_1c0f0d09c8b645f4aa0c";
export const url=new URL("../icons/text-align-center.svg?v=ed4dec0c05a964014262ac7fe3ea4f882c89337073a9a621ef4568498d4a1769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
