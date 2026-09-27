export const name="hand-waving";
export const id="dl_1bf82864c6114faf9c0d";
export const url=new URL("../icons/hand-waving.svg?v=7de6cbd631030c8a02c3b67410ec29ed1064870845061f9d1c02d160ef521a53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
