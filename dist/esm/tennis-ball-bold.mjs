export const name="tennis-ball-bold";
export const id="dl_435a619a4b533e05d2d0";
export const url=new URL("../icons/tennis-ball-bold.svg?v=ff98dfbc64bc9ba9b2f8cd3593de70b9a02f9292b8ae446f3ad3a122ebe29d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
