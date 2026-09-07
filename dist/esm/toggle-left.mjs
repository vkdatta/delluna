export const name="toggle-left";
export const id="dl_05f62451e6ca4f7e8dfe";
export const url=new URL("../icons/T/toggle-left.svg?v=b6a2e0b736561d6c22efe6f761fac74011d90beaba64911acbd6f7edddf15550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
