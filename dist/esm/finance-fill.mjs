export const name="finance-fill";
export const id="dl_193fbf944f3aa51014f5";
export const url=new URL("../icons/finance-fill.svg?v=af0e94dcd30b6acffdbefdb5499f93d2cbf0b428a47f9d57e17c0c6bc26a7fac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
