export const name="file-text-light";
export const id="dl_17df532335814b8ba2bc";
export const url=new URL("../icons/file-text-light.svg?v=4579a0026554224ce339d52b4bf468f246e010f58bec025f5019f63e3ab67530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
