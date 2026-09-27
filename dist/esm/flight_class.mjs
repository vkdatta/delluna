export const name="flight_class";
export const id="dl_3cd9bc2430f7a9304dc6";
export const url=new URL("../icons/flight_class.svg?v=a6aac0c8c950755e7f0e4151d4f0240a5a839f30dec4fe2b529f1f39700a5002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
