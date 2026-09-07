export const name="text-aa-light";
export const id="dl_fa4aed4946684d8a8dcc";
export const url=new URL("../icons/T/text-aa-light.svg?v=7aa9880d78c555d346c85e095217af36934a5dda2ee4bc8710be8eea3ca29d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
