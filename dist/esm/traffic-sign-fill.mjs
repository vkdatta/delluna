export const name="traffic-sign-fill";
export const id="dl_f4029a47d0354180bb7c";
export const url=new URL("../icons/T/traffic-sign-fill.svg?v=b67bc5a0e2e5e06b36e6ebc2ad971a41cfad87e2a30427bee0935d751251b563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
