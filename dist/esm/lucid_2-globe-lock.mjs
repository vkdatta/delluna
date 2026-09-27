export const name="lucid_2-globe-lock";
export const id="dl_96c7ef4883f545df8401";
export const url=new URL("../icons/lucid_2-globe-lock.svg?v=840bebcdd1818a27a40df86bedb118172a7b7d80b906d6c81106387f909039d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
