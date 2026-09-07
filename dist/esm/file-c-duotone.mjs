export const name="file-c-duotone";
export const id="dl_d2ca261b958d48ee95f9";
export const url=new URL("../icons/file-c-duotone.svg?v=9bff7f029f19b758cfabf8ded4c212ad1fa0d61eb264b7fb7136c497209860ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
