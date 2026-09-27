export const name="cloud-check-fill";
export const id="dl_84ec6f82cdd640d69610";
export const url=new URL("../icons/cloud-check-fill.svg?v=331c5f474a635a70d42d17b194dde498fa6fc1edaf4e49f9093bfe6374d7540d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
