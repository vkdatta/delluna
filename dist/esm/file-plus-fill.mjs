export const name="file-plus-fill";
export const id="dl_1ae9f331e17a40fc9094";
export const url=new URL("../icons/file-plus-fill.svg?v=53167aa33069d8656f51b8f7b9ffd546577de3c6587d73657779c511c023552d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
