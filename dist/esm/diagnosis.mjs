export const name="diagnosis";
export const id="dl_9db234f4fa2741b09fb1";
export const url=new URL("../icons/diagnosis.svg?v=093885e369cd840dcd8091475df9227ed4531bbb9ec3af62d2febd394fb0fa23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
