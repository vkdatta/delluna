export const name="bezier-curve-light";
export const id="dl_510330b6f05342a88546";
export const url=new URL("../icons/bezier-curve-light.svg?v=0184fb706b99f38f6906a253e957aa0ae24f3cb6753c11a462c303fcf34bb867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
