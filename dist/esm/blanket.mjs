export const name="blanket";
export const id="dl_57b183775cecd3038a0e";
export const url=new URL("../icons/blanket.svg?v=a95467f072532dec59bc4e7d1efcab97c40a4f4c2356189af4499a8e7de8ad7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
