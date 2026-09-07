export const name="markdown-logo-light";
export const id="dl_d76692edf5af4eb8812c";
export const url=new URL("../icons/markdown-logo-light.svg?v=5f24eb3b27ab2c66df5f8ceaee898ce9153c240d198ed504bb182ceb88af8864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
