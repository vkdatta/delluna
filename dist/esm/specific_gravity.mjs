export const name="specific_gravity";
export const id="dl_3069585dcada4f589e89";
export const url=new URL("../icons/specific_gravity.svg?v=b0989ce848b21770a20061b9e8af96659a06a9edaad4b5f7b0f567dac0499e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
