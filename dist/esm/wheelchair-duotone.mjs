export const name="wheelchair-duotone";
export const id="dl_57fa870c094afd8ec5e3";
export const url=new URL("../icons/wheelchair-duotone.svg?v=b10a2e072e41ebf4664e6bfb650faea84708f8285ff4dc94915d620069af4915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
