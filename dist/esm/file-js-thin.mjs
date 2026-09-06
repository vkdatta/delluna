export const name="file-js-thin";
export const id="dl_74dd3a4880104f1b9a0a";
export const url=new URL("../icons/file-js-thin.svg?v=cf592db035cdf16233be3e602ce4d8ec1df49cadc757aa4c32421e951d297ed4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
