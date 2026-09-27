export const name="layers_clear";
export const id="dl_56f9620a68b043440b2c";
export const url=new URL("../icons/layers_clear.svg?v=7e4d35fd6dbe96c97aac90b7ebc1b12c6c5adf70df380f93c79ee0f39a34c649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
