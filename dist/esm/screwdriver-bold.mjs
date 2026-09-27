export const name="screwdriver-bold";
export const id="dl_4549d88851b9e8d14d68";
export const url=new URL("../icons/screwdriver-bold.svg?v=a6917110f9e580e1bd4bc65c7032811f5516b43428a2e73be7f81ee33c4acc5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
