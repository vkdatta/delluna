export const name="chair_counter";
export const id="dl_f894ebfa22da7f158843";
export const url=new URL("../icons/chair_counter.svg?v=e6a76eb1d7d69b7c9024ffe4b5eca1092140d77a6c89fbb5d3ea4df312b25c37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
