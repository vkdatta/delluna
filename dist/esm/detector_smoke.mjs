export const name="detector_smoke";
export const id="dl_dd0c1e0d9a4216f120bc";
export const url=new URL("../icons/detector_smoke.svg?v=6bf3ec6afe46086217045f384f73f28d846d76198c6c76a2bba7a5a537993e81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
