export const name="cash-register-light";
export const id="dl_308730f3b9314c7e8dfa";
export const url=new URL("../icons/cash-register-light.svg?v=fdac7cef9536c19ef8ca6d353c336ec7894667f9931df336c598655b82fca2dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
