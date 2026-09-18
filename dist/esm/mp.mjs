export const name="mp";
export const id="dl_ad4b83514f8a4d58995d";
export const url=new URL("../icons/M/mp.svg?v=f40d333c5ee9238b23e7b7e62ce75a108a1574fc1040569d3032b6ab51202593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
