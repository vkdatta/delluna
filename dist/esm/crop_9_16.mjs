export const name="crop_9_16";
export const id="dl_611cd45ba9f368570b12";
export const url=new URL("../icons/crop_9_16.svg?v=cce728b5a28a4cb8f46d8571489e67d549410d68c8f0f1c1d6c39e24c0917a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
