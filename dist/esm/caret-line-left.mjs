export const name="caret-line-left";
export const id="dl_e766ff4ad93546a8b52f";
export const url=new URL("../icons/caret-line-left.svg?v=16ed0cd831a43108e060de440bc67967eef0187e94e0ab0000d196bcd02e2925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
