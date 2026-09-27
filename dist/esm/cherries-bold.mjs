export const name="cherries-bold";
export const id="dl_ced116e263d6491fa60a";
export const url=new URL("../icons/cherries-bold.svg?v=a20fe4f934141d47f1459b8127610d89aaab14d084ed2851237b442782eadb62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
