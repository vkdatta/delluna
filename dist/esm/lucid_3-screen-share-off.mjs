export const name="lucid_3-screen-share-off";
export const id="dl_a67ad07ef75648c3ac54";
export const url=new URL("../icons/lucid_3-screen-share-off.svg?v=688108d0d440191228d160f3920ec21a6a1380e5782e64f580073380d634a0a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
