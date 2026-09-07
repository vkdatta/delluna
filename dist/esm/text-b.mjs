export const name="text-b";
export const id="dl_fadd2645ea80410aa9c4";
export const url=new URL("../icons/T/text-b.svg?v=39dc3c7bafeb11d9d6dc982201d60b52e84ffdbf35833d4b1dfaa298c68518b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
