export const name="funnel-x-bold";
export const id="dl_8ebb77a1f3e94588b1ef";
export const url=new URL("../icons/funnel-x-bold.svg?v=ebbf0e391e4d12f61f3d060a96b9191ea1147e7c91f8b2dd8131321b28b3e29b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
