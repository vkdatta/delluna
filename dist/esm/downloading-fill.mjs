export const name="downloading-fill";
export const id="dl_25a0e9fc789a396129ae";
export const url=new URL("../icons/downloading-fill.svg?v=f4eba31231ae64526f7501da8b3c9760831fec720b09b79edade30ed1ae4cd42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
