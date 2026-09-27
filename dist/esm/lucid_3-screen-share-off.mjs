export const name="lucid_3-screen-share-off";
export const id="dl_a67ad07ef75648c3ac54";
export const url=new URL("../icons/lucid_3-screen-share-off.svg?v=580d635dbdcd7b22809a218fa93c1af276efed45631c3bb0ad7cae7967f49f29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
