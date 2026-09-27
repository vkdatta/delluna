export const name="escalator";
export const id="dl_3906264c3ce8dc6de9d4";
export const url=new URL("../icons/escalator.svg?v=a5067e6ef414561aca9009c6eeb0618b86e56deb847e3f597690edeb87f43179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
