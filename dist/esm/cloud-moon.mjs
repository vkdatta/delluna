export const name="cloud-moon";
export const id="dl_e46ee834d42f4261a43c";
export const url=new URL("../icons/cloud-moon.svg?v=db0006edbb05ad475e809374b488a8adefe0987d13ac47c82cd50f52db4deef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
