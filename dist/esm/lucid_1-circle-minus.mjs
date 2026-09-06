export const name="lucid_1-circle-minus";
export const id="dl_1fd9f882658b4cc9a590";
export const url=new URL("../icons/lucid_1-circle-minus.svg?v=54e86f3c7f44b1a71098edc2dfb74a9ee60557d516e8a4fe3d832f81503cb4fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
