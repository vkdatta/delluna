export const name="head-circuit-duotone";
export const id="dl_6050693f70bb497ba1ea";
export const url=new URL("../icons/head-circuit-duotone.svg?v=74126a21f466ae7ab641bef4f2819242fe349208a9668ab24ada7b87f5b5454b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
