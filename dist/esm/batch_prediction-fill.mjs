export const name="batch_prediction-fill";
export const id="dl_b54aab476eee4acfacf0";
export const url=new URL("../icons/batch_prediction-fill.svg?v=51c154db46ef0e8a7269369e5a0d1c50c1e9927c4947116dd32d109c008063c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
