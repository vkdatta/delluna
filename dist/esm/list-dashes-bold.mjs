export const name="list-dashes-bold";
export const id="dl_cfa70d3575f349fd80e2";
export const url=new URL("../icons/list-dashes-bold.svg?v=8743f98f6949b02531c9fe06cc7819d3ada57da4b0377eddbf536b9f0da4feec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
