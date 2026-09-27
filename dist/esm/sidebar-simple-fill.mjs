export const name="sidebar-simple-fill";
export const id="dl_a7ae451540bb893762a8";
export const url=new URL("../icons/sidebar-simple-fill.svg?v=a460c13062e50b43a643bbb1f52c16f08ba79d512d4be553c238381bc792bb0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
