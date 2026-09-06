export const name="air-traffic-control-thin";
export const id="dl_1d17cc2f2cbf452c8a49";
export const url=new URL("../icons/air-traffic-control-thin.svg?v=6039b93fb709e8d0f1c21e37f641c88be86e0d01168b04ff2502d3446540364f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
