export const name="x-square-duotone";
export const id="dl_9abfb18547e77b920970";
export const url=new URL("../icons/x-square-duotone.svg?v=190bfc559a87aadbad6f4b9f9cbd0875ef908c5c8b82a5ec2057530192664031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
