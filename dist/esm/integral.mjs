export const name="integral";
export const id="dl_49ea990f4bb048bab2af";
export const url=new URL("../icons/integral.svg?v=14b97f6f38de0fd5f910b686f40fc4afc3a8a354687a4eb98a5fb7f4092d546e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
