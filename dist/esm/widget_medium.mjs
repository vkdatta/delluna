export const name="widget_medium";
export const id="dl_ffffd0a25bac46ddadf7";
export const url=new URL("../icons/W/widget_medium.svg?v=a0705fcad39dc51b6647d543d1f2e957c433f20ffbedb4f57650af662d06701f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
