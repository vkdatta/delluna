export const name="record-thin";
export const id="dl_d12a6fc73fea473889fe";
export const url=new URL("../icons/record-thin.svg?v=d05193e49697f351efdad0f8cde29f38fee80a56a4b0f97f525793f7caab780d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
