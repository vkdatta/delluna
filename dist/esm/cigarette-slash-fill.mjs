export const name="cigarette-slash-fill";
export const id="dl_b2b93d176e294fd7afa0";
export const url=new URL("../icons/cigarette-slash-fill.svg?v=e43258954becd9e1da7edfcac0526f7a508a57afdc51979a8ab5278f7d488813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
