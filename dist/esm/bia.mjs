export const name="bia";
export const id="dl_9b521187c2e26432a919";
export const url=new URL("../icons/bia.svg?v=f7e7da33767d27dff50c4df5a9a78fe01e7b9d17869cc5215b072db905648d0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
