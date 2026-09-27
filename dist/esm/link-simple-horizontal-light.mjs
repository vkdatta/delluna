export const name="link-simple-horizontal-light";
export const id="dl_6de52108828e4583b779";
export const url=new URL("../icons/link-simple-horizontal-light.svg?v=00ddda95fe072aa37df406db90d5d0d62f641b51de595295530a0fb0fa42c8d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
