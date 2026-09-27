export const name="x-circle-duotone";
export const id="dl_2e049d53aa1cfd784a2f";
export const url=new URL("../icons/x-circle-duotone.svg?v=4e39e973c7a61c6cdd3a6595331fd9039440ac8170385916160a39a7909d7758",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
