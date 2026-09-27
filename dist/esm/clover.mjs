export const name="clover";
export const id="dl_88458c280c144bd281fa";
export const url=new URL("../icons/clover.svg?v=62109e7c0817578e32029f29b0e9683c9e73c577377b34fca872ee1a451906a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
