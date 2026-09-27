export const name="rocket_launch";
export const id="dl_69129b2f03be6e16891f";
export const url=new URL("../icons/rocket_launch.svg?v=554250ca3ed1374d494dd22e489f62e160cc9f14a769b46ce6858b29bb4fc0ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
