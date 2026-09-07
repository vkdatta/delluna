export const name="sun";
export const id="dl_c7907b69e669401f9cd6";
export const url=new URL("../icons/sun.svg?v=dade6653f7452fd8f82a09a3b4be78f06627433842392e171605becf3305bbb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
