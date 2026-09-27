export const name="lucid_3-mosque";
export const id="dl_1462941e6c1641e79ee2";
export const url=new URL("../icons/lucid_3-mosque.svg?v=99d1481eaac5a7a9207ff933ae22a004891dd0c59e47bf9e5e32ce6dc01e7285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
