export const name="pageview";
export const id="dl_4d6d11c3f54b1230caf3";
export const url=new URL("../icons/pageview.svg?v=a620b843881cb47f51a9784fe82fd0c6bc209ec897b472a5e60c9f81b99372a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
