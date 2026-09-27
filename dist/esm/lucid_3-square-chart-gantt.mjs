export const name="lucid_3-square-chart-gantt";
export const id="dl_705560aa35f44078a9de";
export const url=new URL("../icons/lucid_3-square-chart-gantt.svg?v=b46d6cb1fd3ca542381c1cd25181dee3ff95eb7baf970e2f304f4f6e977ae3af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
