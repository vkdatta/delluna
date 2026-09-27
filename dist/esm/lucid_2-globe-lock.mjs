export const name="lucid_2-globe-lock";
export const id="dl_96c7ef4883f545df8401";
export const url=new URL("../icons/lucid_2-globe-lock.svg?v=22c9927ede8c1b38d34604dac482eb0ddb1487cbd09659b465fe5844b22122f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
