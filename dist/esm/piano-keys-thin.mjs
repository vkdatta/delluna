export const name="piano-keys-thin";
export const id="dl_ad664f9669f442af9b57";
export const url=new URL("../icons/piano-keys-thin.svg?v=853a157f93f5180b5a702a7369362983cbdcab8a491c2af02ccf982cbe4300f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
