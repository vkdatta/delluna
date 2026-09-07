export const name="thumbs-up-duotone";
export const id="dl_81a75e18833a4a15a272";
export const url=new URL("../icons/T/thumbs-up-duotone.svg?v=39d4ef8b4e6b6b49e9efe757e7de9ae577e4e9dd8d8e143b6028f262cb310905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
