export const name="bridge-duotone";
export const id="dl_7be1493979064962a124";
export const url=new URL("../icons/bridge-duotone.svg?v=ab20f72d9e281217c2fb532df93fa380889e43352b0c9c6f3bbc8ef314cc9984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
