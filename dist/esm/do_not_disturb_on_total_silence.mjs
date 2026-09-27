export const name="do_not_disturb_on_total_silence";
export const id="dl_bac50a33ab14dccd6869";
export const url=new URL("../icons/do_not_disturb_on_total_silence.svg?v=c226326efa06eba8f914e75092b56f1a473076ea084a8bb657394f323e432daf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
