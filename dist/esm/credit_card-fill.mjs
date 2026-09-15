export const name="credit_card-fill";
export const id="dl_dda33f10b460468cb184";
export const url=new URL("../icons/C/credit_card-fill.svg?v=bef28546b669569f97b13482d665a8c95d91ec73b3c0a1137f36c78005298e87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
