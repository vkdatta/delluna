export const name="factory-bold";
export const id="dl_d6a2f6d282e9499b8f5a";
export const url=new URL("../icons/factory-bold.svg?v=0d3f33c7a7aa04a217d99e05a508042c2e3ce0bf21d3cfa583d6130dc4a92e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
