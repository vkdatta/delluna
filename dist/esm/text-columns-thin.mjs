export const name="text-columns-thin";
export const id="dl_407179099f45d677f949";
export const url=new URL("../icons/text-columns-thin.svg?v=e586a44d572f39bc5531ca336db4637f635e2ddbf3e10e033dc8217bac39043c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
