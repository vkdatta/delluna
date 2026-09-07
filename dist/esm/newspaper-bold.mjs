export const name="newspaper-bold";
export const id="dl_770371e0eafd4bd8b3d1";
export const url=new URL("../icons/newspaper-bold.svg?v=cc6895330d20a760e1eeb6cdb0a6a03f2d4184ead69e59e46558c481e16a0dc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
