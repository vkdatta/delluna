export const name="tower-control";
export const id="dl_eb29323514254b62b183";
export const url=new URL("../icons/tower-control.svg?v=46200893de892b50f32d32211421584e6d3aea023123ce76ef2d8a482610d6ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
