export const name="swiss-franc";
export const id="dl_4f47dd52ae0c47d5adf9";
export const url=new URL("../icons/swiss-franc.svg?v=7110e892578a1ccbc80d58e13a2c52d7cca4e067cc31f3201638495d58f47d00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
