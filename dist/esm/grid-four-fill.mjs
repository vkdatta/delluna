export const name="grid-four-fill";
export const id="dl_5643bb6b52fc4273afc9";
export const url=new URL("../icons/grid-four-fill.svg?v=2c172ce4c7a9838fe7bfbd3d23ccf418a414392728f93a226cda1c60f3313312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
