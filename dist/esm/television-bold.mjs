export const name="television-bold";
export const id="dl_ef8c6805ce75c9921c4d";
export const url=new URL("../icons/television-bold.svg?v=c3eca36c06c3094b84fb8447d0fb1f7987d02e9e97cd7b4125c33a3332874aa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
