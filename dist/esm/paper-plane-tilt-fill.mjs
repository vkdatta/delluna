export const name="paper-plane-tilt-fill";
export const id="dl_c05ae0a0d5944f768cf0";
export const url=new URL("../icons/paper-plane-tilt-fill.svg?v=e87a9a5bce889e5e221e85b2fe8c10c27a957d57f38575417ade42d4850003e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
