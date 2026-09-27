export const name="lucid_1-bluetooth-connected";
export const id="dl_9ba53cd97cb541d0817b";
export const url=new URL("../icons/lucid_1-bluetooth-connected.svg?v=4aa0ba8e7cd53acb1e6e23304bfbf7abd59e0052f20cd4298bb85a3c42024c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
