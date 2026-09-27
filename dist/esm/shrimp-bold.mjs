export const name="shrimp-bold";
export const id="dl_925751a55ce8e5488e90";
export const url=new URL("../icons/shrimp-bold.svg?v=d85035c993a36af28b9dd571777f88553a92b867ea7b1ec54472fd7fa2729215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
