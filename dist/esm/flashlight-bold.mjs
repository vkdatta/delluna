export const name="flashlight-bold";
export const id="dl_afaa747056af4cb897e5";
export const url=new URL("../icons/flashlight-bold.svg?v=3d9d995bb11bb7ea1e87470d3c10abe2ec03ef69078a9523cdadbec0dc326ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
