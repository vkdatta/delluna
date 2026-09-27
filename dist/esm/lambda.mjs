export const name="lambda";
export const id="dl_fd255b583b2245198901";
export const url=new URL("../icons/lambda.svg?v=401e29774c4fe282896efc46ab6e42813cf443d74091eed488574c48b8d894f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
