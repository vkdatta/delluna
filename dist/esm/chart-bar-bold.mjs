export const name="chart-bar-bold";
export const id="dl_0ba420a69be944729a00";
export const url=new URL("../icons/chart-bar-bold.svg?v=9a6030f368dcb38ed2a703936e520add9f1b95dff92351384cf2686e1e3eecb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
