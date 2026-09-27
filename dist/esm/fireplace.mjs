export const name="fireplace";
export const id="dl_e6795a73873a4cc0be9a";
export const url=new URL("../icons/fireplace.svg?v=4867edc62afbf0f5efafb0c7230b3893417e13578ae8468f9cda53fc35e64340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
