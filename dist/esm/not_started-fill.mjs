export const name="not_started-fill";
export const id="dl_60e3f6f2f518670652ad";
export const url=new URL("../icons/not_started-fill.svg?v=c6a343537167c84cb2454604be0c716846bb35af3b8d654ceacf40b56e83c76d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
