export const name="volleyball-bold";
export const id="dl_9ad0e67224d3209cd08b";
export const url=new URL("../icons/volleyball-bold.svg?v=5763a7711d5f37103d9ac8cdeb01ab1a6d24e3389f4a9526690739ba622894c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
