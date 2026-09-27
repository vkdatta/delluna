export const name="link-simple-horizontal-break-duotone";
export const id="dl_36ce79b810664478b486";
export const url=new URL("../icons/link-simple-horizontal-break-duotone.svg?v=d0b0d73ddfc8274a905d0d0fde97094d99607e9dbd350510c37b9d6bc551b440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
