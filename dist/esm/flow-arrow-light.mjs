export const name="flow-arrow-light";
export const id="dl_0458d3a3fe814412be11";
export const url=new URL("../icons/flow-arrow-light.svg?v=4b7a25d3ef75ee689d37947119a209ad409e33f60a79b2dde9108ea1087c8b55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
