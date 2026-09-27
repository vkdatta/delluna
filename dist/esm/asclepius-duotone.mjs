export const name="asclepius-duotone";
export const id="dl_c188202c88b44549bb34";
export const url=new URL("../icons/asclepius-duotone.svg?v=042be487df60f746c4a205c91eaa189cb04939e5d7ef20bba5dbc849463a42b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
