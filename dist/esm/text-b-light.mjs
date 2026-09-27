export const name="text-b-light";
export const id="dl_9109c47b6fc1aff10913";
export const url=new URL("../icons/text-b-light.svg?v=c0efb50422c1403ba8075f459a4e36b13c418a58f4623144d91953ad16ff8c32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
