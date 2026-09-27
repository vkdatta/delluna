export const name="check-square-offset-bold";
export const id="dl_3851f13073794a4dbd09";
export const url=new URL("../icons/check-square-offset-bold.svg?v=8d865d895bc6257c152554d06b6c2a248719acb4c48abfaebf984869a5131acc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
