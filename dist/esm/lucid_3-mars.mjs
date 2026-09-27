export const name="lucid_3-mars";
export const id="dl_69590391d9514ebeaed0";
export const url=new URL("../icons/lucid_3-mars.svg?v=a2f0f1a638328e6bcb6d3f329f2e5ac5321eca316e1deeba4b9770d4ae25b25a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
