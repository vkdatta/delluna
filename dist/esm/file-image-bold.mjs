export const name="file-image-bold";
export const id="dl_3d2e86c81077493da408";
export const url=new URL("../icons/file-image-bold.svg?v=0811ef386d93cf484723ee72e13bd2faf1d6659a6a2665708b5e6804035d9c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
