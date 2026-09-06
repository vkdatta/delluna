export const name="chart-scatter-thin";
export const id="dl_68583a9b125640a48910";
export const url=new URL("../icons/chart-scatter-thin.svg?v=58457d21b7354386ff3e33695237cbcf57743f1ffc3505cb99a87e781dc2aaef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
