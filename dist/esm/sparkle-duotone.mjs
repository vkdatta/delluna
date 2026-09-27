export const name="sparkle-duotone";
export const id="dl_2980ca8fc768b72f093c";
export const url=new URL("../icons/sparkle-duotone.svg?v=70f3efa84c4dc8a00306904c7a81fffe0803bb759d90520622e4f05247abb4a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
