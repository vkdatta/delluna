export const name="lock_open-fill";
export const id="dl_23f35cc9da51a4e91bcb";
export const url=new URL("../icons/lock_open-fill.svg?v=f8359e7070c325b8103612e98da341d108de8e81e2588564f1edff05211b81e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
