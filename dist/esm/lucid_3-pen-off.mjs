export const name="lucid_3-pen-off";
export const id="dl_f83169a6f4134d0cbf7a";
export const url=new URL("../icons/lucid_3-pen-off.svg?v=13d0f6e4d04f488b137f8bab09fc51700dd8831acb9f8773151a09eadb18bf95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
