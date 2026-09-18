export const name="flag_2";
export const id="dl_bc409a6356764f8aaaa3";
export const url=new URL("../icons/flag_2.svg?v=993d71808e37909786e5f963f2b322defb5023fc0fb75a4c37a8b00e7f76b9f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
