export const name="fluid";
export const id="dl_fa47490b93f870495fad";
export const url=new URL("../icons/fluid.svg?v=73d35963c9a625338690b776102b779d6a0d7a2f4721b8be327e9d345fd967d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
