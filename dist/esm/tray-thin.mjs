export const name="tray-thin";
export const id="dl_6a4739c94c7b415ebe44";
export const url=new URL("../icons/T/tray-thin.svg?v=c64598b27b508bab3db1be30db5c1acd30304d2774e94c7d359b8a8d680b8633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
