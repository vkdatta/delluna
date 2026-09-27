export const name="chalkboard-teacher-bold";
export const id="dl_feb45d05f7f54e6698f9";
export const url=new URL("../icons/chalkboard-teacher-bold.svg?v=96ba2d9851d9ea10b563012735a646fdd664cf2d3ccdf05136516e265e533e13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
