export const name="pages";
export const id="dl_8ddcb0162936ba536d2c";
export const url=new URL("../icons/pages.svg?v=39b09cd6410b39d29ec7cec2477cc47566ef03e90cc6d01fbe7e542a4e3a209b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
