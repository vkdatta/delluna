export const name="tapas";
export const id="dl_3fbe8fc4a575545724a6";
export const url=new URL("../icons/tapas.svg?v=389d4e4008fce793c8e31be8aba5445e6b2a25ef84fd3b2cd55130c3045dfcc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
