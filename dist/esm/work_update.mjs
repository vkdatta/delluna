export const name="work_update";
export const id="dl_80fc0ffcec5b4e298810";
export const url=new URL("../icons/work_update.svg?v=118033718d43098e8cfbedab11402078efac45bbd9f0f79d60cf181d48df80e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
