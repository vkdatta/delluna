export const name="clover";
export const id="dl_88458c280c144bd281fa";
export const url=new URL("../icons/clover.svg?v=ab1413a72cb41a65e7fd42cede594c635750c130f80ecd00f17a5e47ab89f883",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
