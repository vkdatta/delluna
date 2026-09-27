export const name="spoke";
export const id="dl_6714de85ef6c81b3d525";
export const url=new URL("../icons/spoke.svg?v=c50b101fae60c3e0c38869825df5a8cf7c0ff313415117d8e99de10be188c185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
