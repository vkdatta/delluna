export const name="chart-bar-thin";
export const id="dl_2dbac4d400fe44759da2";
export const url=new URL("../icons/chart-bar-thin.svg?v=675858be7c3dba109f72d635e3737a3e86e1afcca29f91aa4743ebb6d1703306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
