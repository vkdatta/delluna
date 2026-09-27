export const name="thumbs_up_double";
export const id="dl_e991d8ea46188d372605";
export const url=new URL("../icons/thumbs_up_double.svg?v=d97de9151254871d56e9e055dd9d384dc5877a2f0b6bd420a4907d950e863769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
