export const name="file-arrow-down";
export const id="dl_9a4765c2d4454bea866b";
export const url=new URL("../icons/file-arrow-down.svg?v=b08faaac9a2dae480b6f1decd2133ee2489450393191b0eb9490d47aeabf6d91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
