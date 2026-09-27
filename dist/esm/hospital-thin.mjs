export const name="hospital-thin";
export const id="dl_7c097aa96e404d508708";
export const url=new URL("../icons/hospital-thin.svg?v=eefb21a3fa64088da08a4794acc68f674d8647a92b6249c3cac5031607308b0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
