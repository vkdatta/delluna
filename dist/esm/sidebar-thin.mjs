export const name="sidebar-thin";
export const id="dl_e072991454081d73332a";
export const url=new URL("../icons/sidebar-thin.svg?v=08faaebc96854afe367026c59fedbf3444f9a574c9bc3c05e865cc01f126dcc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
