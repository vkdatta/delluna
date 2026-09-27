export const name="pause-duotone";
export const id="dl_c06a7599334e4bd6bb3d";
export const url=new URL("../icons/pause-duotone.svg?v=e99de3056f7e875493088e726a80f10fdda77e16710414211c6906e5ac699fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
