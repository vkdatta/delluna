export const name="aod_watch";
export const id="dl_25f42a5161194e60993a";
export const url=new URL("../icons/aod_watch.svg?v=fc7502108af6e7c646716201ddd41f1061506640cf8ef7ccf5aa69dec4d47f80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
