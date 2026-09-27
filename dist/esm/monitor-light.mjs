export const name="monitor-light";
export const id="dl_82cbfd048df642efb3d4";
export const url=new URL("../icons/monitor-light.svg?v=ba14acbfb7267f645596e3e21cc71b8098f99d77903f9771c584c93dd4435090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
