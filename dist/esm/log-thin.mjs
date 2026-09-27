export const name="log-thin";
export const id="dl_e7f6e11f50344580b0c9";
export const url=new URL("../icons/log-thin.svg?v=fb9fa2166360f6e10653679a626f817481394a408fe2a52304b488365d4647d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
