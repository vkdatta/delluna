export const name="projector-screen-chart";
export const id="dl_802c353d90a94cb9885a";
export const url=new URL("../icons/projector-screen-chart.svg?v=2116eea87c16f5ffa0589d7eb07265e94ecaff29b5694573f1a6abe12c9d14bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
