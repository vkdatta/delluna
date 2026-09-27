export const name="signal_wifi_bad";
export const id="dl_f57502578463e2117cc4";
export const url=new URL("../icons/signal_wifi_bad.svg?v=17c26a932b7811a610ba18b313b69db42b100ef750c6fd0feeddf39bac6ff9e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
