export const name="gps-slash-bold";
export const id="dl_92a20f66b71d4f6eb105";
export const url=new URL("../icons/gps-slash-bold.svg?v=5a79547110ede6c3f3016756c804509e2ed83341c019bc7646322dcc5c63faee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
