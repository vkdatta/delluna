export const name="file-svg-duotone";
export const id="dl_9cdc51a319ec4a85a032";
export const url=new URL("../icons/file-svg-duotone.svg?v=71a0cfcfd12ea9228ccba0497ca471bae420ea5209b7c180ae41ff648d6bcafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
