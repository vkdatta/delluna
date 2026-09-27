export const name="pants-thin";
export const id="dl_10d89dca33a648f5bf4f";
export const url=new URL("../icons/pants-thin.svg?v=763ce3707ecafffd2a3299ca0a971f9cb94ad61f08466382d6be3372d216c6c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
