export const name="signal_cellular_nodata-fill";
export const id="dl_6b6b034996fc5b2e94f1";
export const url=new URL("../icons/signal_cellular_nodata-fill.svg?v=298a0fdcc2081ec4e909666d9c22ec7569301dfab5efad9af18dd98a54a912cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
