export const name="splitscreen";
export const id="dl_b7721e4145a12f000c3c";
export const url=new URL("../icons/splitscreen.svg?v=428286c2326f5b81e94a5dd520d5be2d029f2b84172efb454b9ca4dd3d6a2d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
